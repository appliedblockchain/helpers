// @flow

const { inspect } = require('util')
const isHex = require('./is-hex')

function hex0xOfHex(value /*: string */) /*: string */ {
  if (!isHex(value)) {
    throw new TypeError(`Expected hex, got ${inspect(value)}.`)
  }
  return '0x' + value
}

module.exports = hex0xOfHex
