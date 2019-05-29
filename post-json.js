// @flow

const { inspect } = require('util')
const { min, max } = Math
const { now } = Date
const { parse } = require('url')
const defaultAgentOfUrl = require('./default-agent-of-url')
const errOf = require('./err-of')
const logOf = require('./log-of')
const meta = require('./meta')
const requestOfUrl = require('./request-of-url')
const sleep = require('./sleep')

/*::

type ErrorWithCode = Error & { code?: string | number }

*/

const log = logOf('post-json')

// TODO: Maybe read from env.
const defaultTimeout = 60 * 1000

// Safe retry for flushed requests is 0 (no retry). Retry count should be specified by the caller. Ie we can't determine
// here what is indepotent/safe to retry.
const defaultFlushedRetry = 0

// Unflushed requests can be safely retried because they didn't make it to the other end.
const defaultUnflushedRetry = 8

// As default, we'll wait minimum 1 second before each retry.
const defaultRetryDelay = 1 * 1000

function parseJson(value /*: string */) /*: any */ {
  try {
    return JSON.parse(value)
  } catch (err) {
    return void 0
  }
}

function defaultRetryOfErr(err /*: ErrorWithCode */) /*: boolean */ {
  return err && (
    err.code === 'ECONNRESET' ||
    err.code === 'ETIMEOUT'
  )
}

// TODO: Add retry for common errors.
function postJsonNoRetry(
  url /*: string */,
  json /*: any */,
  {
    agentOfUrl = defaultAgentOfUrl,
    timeout = defaultTimeout
  } /*: {
    agentOfUrl?: (url: string) => any,
    timeout?: number
  } */ = {}
) /*: Promise<{| code: number, headers: string[], json: any, buffer: Buffer |}> */ {
  const request = requestOfUrl(url)
  if (!request) {
    throw new TypeError(`Unable to determine request function to use for ${inspect(url)} url (expected http:// or https:// schema).`)
  }
  const agent = agentOfUrl(url)

  // Agent is responsible for keep alive connections, if defined, use keep alive, otherwise don't.
  // TODO: Make timeout and max configurable.
  const keepAliveHeaders = agent ?
    {
      'Connection': 'keep-alive',
      'Keep-Alive': 'timeout=10, max=1024',
    } :
    {}

  const content = JSON.stringify(json)
  const { protocol, host, hostname, port } = parse(url)
  const options = {
    agent,
    protocol,
    host,
    hostname,
    port,
    method: 'POST',
    headers: {
      ...keepAliveHeaders,
      'Content-Type': 'application/json',
      'Content-Length': Buffer.byteLength(content)
    }
  }
  return new Promise((resolve, reject) => {

    // Keep track of request buffer flush. If buffer has not been fully flushed, we consider it safe to retry the
    // request.
    let flushed = false

    const req = request(options, res => {
      const chunks = []
      res.on('data', chunk => chunks.push(chunk))
      res.on('end', () => {
        const code = res.statusCode
        const headers = res.headers
        const buffer = Buffer.concat(chunks)
        const json = parseJson(buffer.toString('utf8'))
        req.emit('settle', void 0, { code, headers, json, buffer })
      })
      res.on('error', err => req.emit('settle', err))
    })

    req.on('error', err => req.emit('settle', err))
    req.on('timeout', () => req.emit('settle', errOf('ETIMEOUT', `Timeout of ${inspect(timeout)} exceeded.`)))

    req.on('settle', (err, result) => {

      // TODO: Double check if this is safe.
      req.removeAllListeners()

      // HACK: Leave error handler so it doesn't blow up main loop.
      req.on('error', () => void 0)

      // Reset timeout for other keep alive.
      req.setTimeout(0)

      if (err) {
        meta.set(err, 'flushed', flushed)
        reject(err)

        // When rejecting, kill keep alive connection.
        if (req.socket) {
          req.socket.destroy(err)
        }
      } else {
        resolve(result)
      }
    })

    req.setTimeout(timeout)

    req.end(content, () => {
      flushed = true
    })
  })
}

function postJsonRetry(
  url /*: string */,
  json /*: any */,
  options /*: {
    agentOfUrl?: (url: string) => any,
    timeout?: number,
    retry?: number,
    retryDelay?: number,
    retryOfErr?: (err: ErrorWithCode) => boolean
  } */ = {}
) /*: Promise<{| code: number, headers: string[], json: any, buffer: Buffer |}> */ {
  const { retry, retryDelay = defaultRetryDelay, retryOfErr = defaultRetryOfErr, ...rest } = options
  const before = now()
  return postJsonNoRetry(url, json, rest)
    .catch((err /*: ErrorWithCode */) => {

      const flushed = meta.get(err, 'flushed')
      const retry_ = typeof retry === 'undefined' ?
        flushed ? defaultFlushedRetry : defaultUnflushedRetry :
        retry
      const shouldRetry = retryOfErr(err)

      log.warn('Catched error.', { url, json, err, flushed, retry: retry_, shouldRetry })

      if (retry_ && shouldRetry) {
        return sleep(max(0, retryDelay - (now() - before))).then(() => postJsonRetry(url, json, {
          ...rest,
          retry: retry_ - 1,
          retryDelay,
          retryOfErr
        }))
      } else {
        throw err
      }
    })
}

module.exports = postJsonRetry
