// @flow

const { inspect } = require('util')
const { isSafeInteger } = Number

// Returns little-endian, 32-bytes padded, prefixed hex string representation of a finite, integer number.
function hex0xOfNumber(value /*: number */) /*: string */ {
  if (!isSafeInteger(value)) {
    throw new TypeError(`Expected safe integer number, got ${inspect(value)}.`)
  }
  return '0x' + value.toString(16).padStart(32 * 2, '0')
}

module.exports = hex0xOfNumber
