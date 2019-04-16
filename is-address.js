// @flow

const isHex0x = require('./is-hex0x')

function isAddress(value /*: mixed */) /*: boolean %checks */ {
  return isHex0x(value) && value.length === 2 + (2 * 20)
}

module.exports = isAddress
