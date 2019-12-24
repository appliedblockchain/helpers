// @flow

const { from: bufferOf } = Buffer
const { inspect } = require('util')
const evenZeroPaddedOf = require('./even-zero-padded-of')
const isHex0x = require('./is-hex0x')

/** @returns buffer representation of provided hex0x string. */
function bufferOfHex0x(value /*: string */) /*: Buffer */ {
  if (!isHex0x(value)) {
    throw new TypeError(`Expected hex0x string, got ${inspect(value)}.`)
  }
  return bufferOf(evenZeroPaddedOf(value.slice(2)), 'hex')
}

module.exports = bufferOfHex0x
