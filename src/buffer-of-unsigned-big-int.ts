// @flow

const { inspect } = require('util')
const bufferOfHex = require('./buffer-of-hex')

function bufferOfUnsignedBigInt(value /*: any */) /*: Buffer */ {

  // $FlowFixMe
  if (typeof value !== 'bigint') {
    throw new TypeError(`Expected bigint value, got ${inspect(value)}.`)
  }

  // $FlowFixMe
  if (value < BigInt(0)) {
    throw new TypeError(`Expected non-negative bigint value, got ${inspect(value)}.`)
  }

  return bufferOfHex(value.toString(16))
}

module.exports = bufferOfUnsignedBigInt
