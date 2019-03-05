// @flow

const { inspect } = require('util')
const isHex = require('./is-hex')
const isHex0x = require('./is-hex0x')

function bufferOfHexOrHex0x(value /*: string */) {
  if (isHex(value)) {
    return Buffer.from(value, 'hex')
  }
  if (isHex0x(value)) {
    return Buffer.from(value.slice(2), 'hex')
  }
  throw new TypeError(`Expected hex or hex0x string, got ${inspect(value)}.`)
}

module.exports = bufferOfHexOrHex0x
