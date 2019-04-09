// @flow

const { randomBytes } = require('crypto')

/** @returns random unsigned integer that fits 32 bits. */
function randomUint32() /*: number */ {
  return randomBytes(4).readUInt32BE(0, true)
}

module.exports = randomUint32
