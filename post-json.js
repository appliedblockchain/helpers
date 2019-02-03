// @flow

const { request: httpsRequest } = require('https')
const { request: httpRequest } = require('http')
const { parse } = require('url')

function requestOf(url /*: string */) {
  return url.startsWith('https://') ? httpsRequest : httpRequest
}

function parseJson(value /*: string */) /*: any */ {
  try {
    return JSON.parse(value)
  } catch (err) {
    return void 0
  }
}

function postJson(url /*: string */, json /*: any */) /*: Promise<{| code: number, json: any, buffer: Buffer |}> */ {
  const content = JSON.stringify(json)
  const { protocol, host, hostname, port } = parse(url)
  const options = {
    protocol,
    host,
    hostname,
    port,
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Content-Length': Buffer.byteLength(content)
    }
  }
  return new Promise((resolve, reject) => {
    const req = requestOf(url)(options, res => {
      const chunks = []
      res.on('data', chunk => chunks.push(chunk))
      res.on('end', () => {
        const code = res.statusCode
        const buffer = Buffer.concat(chunks)
        const json = parseJson(buffer.toString('utf8'))
        resolve({ code, json, buffer })
      })
      res.on('error', reject)
    })
    req.on('error', reject)
    req.write(content)
    req.end()
  })
}

module.exports = postJson
