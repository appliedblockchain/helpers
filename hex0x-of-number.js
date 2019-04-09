// @flow

const { inspect } = require('util')
const isSafeNonNegative = require('./is-safe-non-negative')

/** @returns 0x-prefixed hex string representation of a safe, non-negative integer number. */
function hex0xOfNumber(value /*: number */) /*: string */ {
  if (!isSafeNonNegative(value)) {
    throw new TypeError(`Expected safe, non-negative number, got ${inspect(value)}.`)
  }
  return '0x' + value.toString(16)
}

module.exports = hex0xOfNumber
