// @flow

const { inspect } = require('util')
const isUint32 = require('./is-uint32')
const { isSafeInteger } = Number
const { abs } = Math

function buffer32OfNumber(value /*: number */) /*: Buffer */ {
  if (!isSafeInteger(value)) {
    throw new TypeError(`Expected safe integer, got ${inspect(value)}.`)
  }
  const absValue = abs(value)
  if (isUint32(absValue)) {
    const buffer = Buffer.alloc(32)
    buffer.writeUInt32BE(value, 16, true)
    if (value < 0) {
      buffer.writeUInt16BE(0xffff, 0, true)
    }
    return buffer
  }
  return value >= 0 ?
    Buffer.from(absValue.toString(16).padStart(64, '0')) :
    Buffer.from(absValue.toString(16).padStart(64, 'ffff0000000000000000000000000000'))
}

module.exports = buffer32OfNumber
