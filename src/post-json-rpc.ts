// @flow

const { inspect } = require('util')
const postJson = require('./post-json')
const JsonRpcError = require('./json-rpc-error')
const isString = require('./is-string')

/*::

type ErrorWithCode = Error & { code?: string | number }

type UrlOrOptions = string | {
  url: string,
  timeout?: number,
  retry?: number,
  retryDelay?: number,
  agentOfUrl?: (url: string) => any,
  retryOfErr?: (err: ErrorWithCode) => boolean
}

*/

let id = 1

async function postJsonRpc(urlOrOptions /*: UrlOrOptions */, method /*: string */, ...params /*: any[] */) /*: Promise<any> */ {

  let url
  let options
  if (isString(urlOrOptions)) {
    url = urlOrOptions
  } else {
    const { url: url_, ...rest } = urlOrOptions
    url = url_
    options = rest
  }

  const { code, json: { jsonrpc, result, error } } = await postJson(url, { jsonrpc: '2.0', id: id++, method, params }, options)

  if (jsonrpc !== '2.0') {
    throw new JsonRpcError(`Expected jsonrpc 2.0, got ${inspect(jsonrpc)}.`, code, url, method, params)
  }

  if (error) {
    throw new JsonRpcError(error.message, error.code, url, method, params)
  }

  return result
}

module.exports = postJsonRpc
