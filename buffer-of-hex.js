// @flow

const { inspect } = require('util')
const isHex = require('./is-hex')

function bufferOfHex(value /*: string */) {
  if (!isHex(value)) {
    throw new TypeError(`Expected hex string, got ${inspect(value)}.`)
  }
  return Buffer.from(value, 'hex')
}

module.exports = bufferOfHex
