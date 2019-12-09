// @flow

const hexOfNumber = require('./hex-of-number')

/** @returns 0x-prefixed hex string representation of a safe, unsigned number. */
function hex0xOfNumber(value /*: number */) /*: string */ {
  return '0x' + hexOfNumber(value)
}

module.exports = hex0xOfNumber
