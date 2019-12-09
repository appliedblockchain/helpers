// @flow

const { inspect } = require('util')
const isSafeUnsigned = require('./is-safe-unsigned')
const { from: bufferOf } = Buffer
const hexOfUnsigned = require('./hex-of-unsigned')

/** @returns the smallest buffer representation of provided safe, unsigned integer number. When input is `0` - empty buffer is returned. */
function bufferOfUnsigned(value /*: number */) /*: Buffer */ {
  if (!isSafeUnsigned(value)) {
    throw new TypeError(`Expected safe unsigned number, got ${inspect(value)}.`)
  }
  return value === 0 ?
    bufferOf([]) :
    bufferOf(hexOfUnsigned(value), 'hex')
}

module.exports = bufferOfUnsigned
