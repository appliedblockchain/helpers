
/*::

  code: string | number
  url: string
  method: string
  params: any[]

  */

export default class JsonRpcError extends Error {

  
  constructor(message: string, code: string | number, url: string, method: string, params: any[]) {
    super(message)
    Object.assign(this, { code, url, method, params })
  }
}
