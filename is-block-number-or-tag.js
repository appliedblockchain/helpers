// @flow

const isHex0x = require('./is-hex0x')

// TODO: Check if safe integer.
function isBlockNumberOrTag(value /*: mixed */) /*: boolean %checks */ {
  return (
    isHex0x(value) ||
    value === 'earliest' ||
    value === 'latest' ||
    value === 'pending'
  )
}

module.exports = isBlockNumberOrTag
