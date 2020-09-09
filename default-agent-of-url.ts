import { inspect } from 'util'
import defaultHttpAgent from './default-http-agent'
import defaultHttpsAgent from './default-https-agent'
import isString from './is-string'
import type { Agent as HttpAgent } from 'http'
import type { Agent as HttpsAgent } from 'https'

export const defaultAgentOfUrl =
  (url: string): null | HttpAgent | HttpsAgent => {
    if (!isString(url)) {
      throw new TypeError(`Expected string url, got ${inspect(url)}.`)
    }
    if (url.startsWith('http://')) {
      return defaultHttpAgent
    }
    if (url.startsWith('https://')) {
      return defaultHttpsAgent
    }
    return null
  }

export default defaultAgentOfUrl