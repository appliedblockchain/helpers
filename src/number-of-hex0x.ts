// @flow

const { inspect } = require('util')
const isHex0x = require('./is-hex0x')

function numberOfHex0x(value /*: string */) /*: number */ {
  if (!isHex0x(value)) {
    throw new TypeError(`Expected hex0x, got ${inspect(value)}.`)
  }
  return parseInt(value.slice(2), 16)
}

module.exports = numberOfHex0x
