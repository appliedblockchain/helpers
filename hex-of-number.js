// @flow

const { inspect } = require('util')
const isSafeUnsigned = require('./is-safe-unsigned')

/** @returns even/byte-padded, hex string representation of a safe, unsigned number. */
function hexOfNumber(value /*: number */) /*: string */ {
  if (!isSafeUnsigned(value)) {
    throw new TypeError(`Expected safe, unsigned number, got ${inspect(value)}.`)
  }
  const hex = value.toString(16)
  return hex.length % 2 === 0 ?
    hex :
    '0' + hex
}

module.exports = hexOfNumber
