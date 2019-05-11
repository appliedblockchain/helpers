// @flow

const { parse } = require('url')
const { inspect } = require('util')
const requestOfUrl = require('./request-of-url')
const defaultAgentOfUrl = require('./default-agent-of-url')
const errOf = require('./err-of')

/*::

type ErrorWithCode = Error & { code?: string | number }

*/

// TODO: Maybe read from env.
const defaultTimeout = 12 * 1000

const defaultRetry = 0

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
    const req = request(options, res => {
      const chunks = []
      res.on('data', chunk => chunks.push(chunk))
      res.on('end', () => {
        const code = res.statusCode
        const headers = res.headers
        const buffer = Buffer.concat(chunks)
        const json = parseJson(buffer.toString('utf8'))
        resolve({ code, headers, json, buffer })
      })
      res.on('error', reject)
    })
    if (timeout) {
      req.setTimeout(timeout, () => {
        if (req.socket) {
          req.socket.destroy(errOf('ETIMEOUT', `Timeout of ${inspect(timeout)} exceeded.`))
        }
      })
    }
    req.on('error', reject)
    req.write(content)
    req.end()
  })
}

function postJsonRetry(
  url /*: string */,
  json /*: any */,
  options /*: {
    agentOfUrl?: (url: string) => any,
    timeout?: number,
    retry?: number,
    retryOfErr?: (err: ErrorWithCode) => boolean
  } */ = {}
) /*: Promise<{| code: number, headers: string[], json: any, buffer: Buffer |}> */ {
  const { retry = 0, retryOfErr = defaultRetryOfErr, ...rest } = options
  return postJsonNoRetry(url, json, rest)
    .catch((err /*: ErrorWithCode */) => {
      if (retry && retryOfErr(err)) {
        return postJsonRetry(url, json, {
          ...rest,
          retry: retry - 1,
          retryOfErr
        })
      } else {
        throw err
      }
    })
}

module.exports = postJsonRetry
