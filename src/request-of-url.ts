import {
  request as httpRequest,
  ClientRequest,
  RequestOptions,
  IncomingMessage,
} from 'http';
import { request as httpsRequest } from 'https';
import isString from './is-string';

type requestType = (
  options: RequestOptions |
  string |
  URL,
  callback?: (res: IncomingMessage) => void
) => ClientRequest

export default function requestOfUrl(url: string): requestType | null {
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
