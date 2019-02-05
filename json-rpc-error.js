// @flow

class JsonRpcError extends Error {

  /*::

  code: string | number
  url: string
  method: string
  params: any[]

  */

  constructor(message /*: string */, code /*: string | number */, url /*: string */, method /*: string */, params /*: any[] */) {
    super(message)
    Object.assign(this, { code, url, method, params })
  }
}

module.exports = JsonRpcError
