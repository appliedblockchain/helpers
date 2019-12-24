// @flow

const { inspect } = require('util')
const keccak256OfBuffer = require('./keccak256-of-buffer')
const hexOfBuffer = require('./hex-of-buffer')
const { isBuffer } = Buffer

function checksumAddressOfBuffer(value /*: Buffer */) /*: string */ {
  if (!isBuffer(value) || value.length !== 20) {
    throw new TypeError(`Expected 20 bytes buffer, got ${inspect(value)}.`)
  }
  const address = hexOfBuffer(value)
  const hash = hexOfBuffer(keccak256OfBuffer(Buffer.from(hexOfBuffer(value), 'ascii')))
  return '0x' + address
    .split('')
    .map((c, i) => parseInt(hash[i], 16) >= 8 ? c.toUpperCase() : c.toLowerCase())
    .join('')
}

module.exports = checksumAddressOfBuffer
