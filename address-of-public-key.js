// @flow

const { inspect } = require('util')
const { isBuffer } = Buffer
const keccak256OfBuffer = require('./keccak256-of-buffer')

function addressOfPublicKey(publicKey /*: Buffer */) /*: Buffer */ {
  if (!isBuffer(publicKey)) {
    throw new TypeError(`Expected public key buffer, got ${inspect(publicKey)}.`)
  }
  if (publicKey.length !== 64) {
    throw new TypeError(`Expected public key buffer of 64 bytes, got ${inspect(publicKey.length)}.`)
  }
  return keccak256OfBuffer(publicKey).slice(-20)
}

module.exports = addressOfPublicKey
