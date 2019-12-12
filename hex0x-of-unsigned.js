// @flow

const hexOfUnsigned = require('./hex-of-unsigned')

/** @returns 0x-prefixed hex string representation of a safe, unsigned number. */
function hex0xOfUnsigned(value /*: number */) /*: string */ {
  return '0x' + hexOfUnsigned(value)
}

module.exports = hex0xOfUnsigned
