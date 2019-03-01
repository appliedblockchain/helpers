// @flow

const isString = require('./is-string')
const isHex = require('./is-hex')

function isHex0x(value /*: mixed */) /*: boolean %checks */ {
  return (
    isString(value) &&
    value.startsWith('0x') &&
    isHex(value.slice(2))
  )
}

module.exports = isHex0x
