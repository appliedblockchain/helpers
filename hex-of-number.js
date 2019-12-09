// @flow

const { inspect } = require('util')
const isSafeUnsigned = require('./is-safe-unsigned')
const evenZeroPaddedOf = require('./even-zero-padded-of')

/** @returns even/byte-padded, hex string representation of a safe, unsigned number. */
function hexOfNumber(value /*: number */) /*: string */ {
  if (!isSafeUnsigned(value)) {
    throw new TypeError(`Expected safe, unsigned number, got ${inspect(value)}.`)
  }
  return evenZeroPaddedOf(value.toString(16))
}

module.exports = hexOfNumber
