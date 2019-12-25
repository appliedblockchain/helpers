
import { inspect } from  'util'
import postJson from './post-json';
import JsonRpcError from './json-rpc-error';

export type ErrorWithCode = Error & { code?: string | number }

export type UrlOrOptions = string | {
  url: string,
  timeout?: number,
  retry?: number,
  retryDelay?: number,
  agentOfUrl?: (url: string) => any,
  retryOfErr?: (err: ErrorWithCode) => boolean
}


let id = 1

export async function postJsonRpc(urlOrOptions: UrlOrOptions, method : string , ...params : any[] ) : Promise<any> {

  let url
  let options
  if (typeof urlOrOptions === 'string') {
    url = urlOrOptions
  } else {
    const { url: url_, ...otherOptions } = urlOrOptions
    url = urlOrOptions.url; 
    options = otherOptions 
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

export default postJsonRpc;
