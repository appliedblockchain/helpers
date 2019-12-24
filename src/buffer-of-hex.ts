// @flow

const { from: bufferOf } = Buffer
const { inspect } = require('util')
const evenZeroPaddedOf = require('./even-zero-padded-of')
const isHex = require('./is-hex')

/** @returns buffer representation of provided hex string. */
function bufferOfHex(value /*: string */) {
  if (!isHex(value)) {
    throw new TypeError(`Expected hex string, got ${inspect(value)}.`)
  }
  return bufferOf(evenZeroPaddedOf(value), 'hex')
}

module.exports = bufferOfHex
