// @flow

const { inspect } = require('util')
const isHex0x = require('./is-hex0x')

function bufferOfHex0x(value /*: string */) {
  if (!isHex0x(value)) {
    throw new TypeError(`Expected hex0x string, got ${inspect(value)}.`)
  }
  return Buffer.from(value.slice(2), 'hex')
}

module.exports = bufferOfHex0x
