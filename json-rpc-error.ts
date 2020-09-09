export type Params = unknown[] | Record<string, unknown>

export class JsonRpcError extends Error {
  code: string | number
  url: string
  method: string
  params: Params
  constructor(message: string, code: string | number, url: string, method: string, params: Params) {
    super(message)
    Object.assign(this, { code, url, method, params })
  }
}

export default JsonRpcError
