// @flow

const { inspect } = require('util')
const isHex0x = require('./is-hex0x')

function hexOfHex0x(value /*: string */) /*: string */ {
  if (!isHex0x(value)) {
    throw new TypeError(`Expected hex0x, got ${inspect(value)}.`)
  }
  return value.slice(2)
}

module.exports = hexOfHex0x
