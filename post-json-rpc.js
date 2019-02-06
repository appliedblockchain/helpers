// @flow

const { inspect } = require('util')
const postJson = require('./post-json')
const JsonRpcError = require('./json-rpc-error')

let id = 1

async function postJsonRpc(url /*: string */, method /*: string */, ...params /*: any[] */) /*: Promise<any> */ {
  const { code, json: { jsonrpc, result, error } } = await postJson(url, { jsonrpc: '2.0', id: id++, method, params })

  if (jsonrpc !== '2.0') {
    throw new JsonRpcError(`Expected jsonrpc 2.0, got ${inspect(jsonrpc)}.`, code, url, method, params)
  }

  if (error) {
    throw new JsonRpcError(error.message, error.code, url, method, params)
  }

  return result
}

module.exports = postJsonRpc
