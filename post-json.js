// @flow

const { parse } = require('url')
const { inspect } = require('util')
const requestOfUrl = require('./request-of-url')
const defaultAgentOfUrl = require('./default-agent-of-url')

function parseJson(value /*: string */) /*: any */ {
  try {
    return JSON.parse(value)
  } catch (err) {
    return void 0
  }
}

// TODO: Add retry for common errors.
function postJson(
  url /*: string */,
  json /*: any */,
  { agentOfUrl = defaultAgentOfUrl } /*: {| agentOfUrl?: (url: string) => any |} */ = {}
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
    req.on('error', reject)
    req.write(content)
    req.end()
  })
}

async function postJsonRetry(
  url /*: string */,
  json /*: any */,
  { agentOfUrl = defaultAgentOfUrl } /*: {| agentOfUrl?: (url: string) => any |} */ = {}
) {
  let ok
  let result
  for (let retry = 0; retry < 12; retry++) {
    [ ok, result ] = await postJson(url, json, { agentOfUrl })
      .then(_ => [ true, _ ])
      .catch(_ => [ false, _ ])
    if (ok) {
      break
    }
    if (!result || result.code !== 'ECONNRESET') {
      break
    }
  }
  if (ok) {
    return result
  }
  throw result
}

module.exports = postJsonRetry
