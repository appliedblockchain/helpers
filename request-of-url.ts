import { request as httpRequest } from 'http'
import { request as httpsRequest } from 'https'
import isString from './is-string'

export const requestOfUrl =
  (url: string) => {
    if (!isString(url)) {
      return null
    }
    if (url.startsWith('http://')) {
      return httpRequest
    }
    if (url.startsWith('https://')) {
      return httpsRequest
    }
    return null
  }

export default requestOfUrl