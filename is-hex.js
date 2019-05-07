// @flow

const isString = require('./is-string')

const re = /^[0-9a-fA-F]*$/

function isHex(value /*: mixed */) /*: boolean %checks */ {
  return (
    isString(value) &&
    re.test(value)
  )
}

module.exports = isHex
