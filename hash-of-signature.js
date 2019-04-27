// @flow

const { inspect } = require('util')
const isString = require('./is-string')
const keccak256OfBuffer = require('./keccak256-of-buffer')

function hashOfSignature(signature /*: string */) /*: Buffer */ {
  if (!isString(signature)) {
    throw new TypeError(`Expected string signature, got ${inspect(signature)}.`)
  }
  return keccak256OfBuffer(Buffer.from(signature, 'utf8')).slice(0, 4)
}

module.exports = hashOfSignature
