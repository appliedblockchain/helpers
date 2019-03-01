// @flow

const isString = require('./is-string')

const re = /^([0-9a-f]{2})+$/i

function isHex(value /*: mixed */) /*: boolean %checks */ {
  return (
    isString(value) &&
    value.length > 0 &&
    value.length % 2 === 0 &&
    re.test(value)
  )
}

module.exports = isHex
