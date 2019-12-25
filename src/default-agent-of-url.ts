import { inspect } from 'util';
import defaultHttpAgent from './default-http-agent';
import defaultHttpsAgent from './default-https-agent';
import isString from './is-string';

export function defaultAgentOfUrl(url : string ) {
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

export default defaultAgentOfUrl;
