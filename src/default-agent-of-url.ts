// @flow

const { inspect } = require('util')
const defaultHttpAgent = require('./default-http-agent')
const defaultHttpsAgent = require('./default-https-agent')
const isString = require('./is-string')

function defaultAgentOfUrl(url /*: string */) {
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

module.exports = defaultAgentOfUrl
