import { inspect } from 'util'
import postJson from './post-json'
import JsonRpcError from './json-rpc-error'
import isString from './is-string'

type ErrorWithCode = Error & { code?: string | number }

type Options = {
  timeout?: number
  retry?: number
  retryDelay?: number
  agentOfUrl?: (url: string) => any
  retryOfErr?: (err: ErrorWithCode) => boolean
}

type UrlOrOptions = string | (Options & { url: string })

let id = 1

export const postJsonRpc =
  async (urlOrOptions: UrlOrOptions, method: string, ...params: any[]): Promise<any> => {
    let url: string
    let options: Options
    if (isString(urlOrOptions)) {
      url = urlOrOptions
    } else {
      const { url: url_, ...options_ } = urlOrOptions
      url = url_
      options = options_
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

export default postJsonRpc
