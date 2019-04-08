// @flow

const { request: httpsRequest } = require('https')
const { request: httpRequest } = require('http')
const isString = require('./is-string')

function requestOfUrl(url /*: string */) {
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

module.exports = requestOfUrl
