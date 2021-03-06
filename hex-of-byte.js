// @flow

const { inspect } = require('util')

const T = []

for (let i = 0; i < 256; ++i) {
  T[i] = i.toString(16).padStart(2, '0')
}

function hexOfByte(value /*: number */) {
  if (!Number.isFinite(value) || value < 0 || value > 0xff) {
    throw new TypeError(`Expected value in <0x00..0xff> range, got ${inspect(value)}.`)
  }
  return T[value]
}

module.exports = hexOfByte
