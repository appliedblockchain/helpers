// @flow

const addressOfPublicKey = require('./address-of-public-key')
const checksumAddressOfBuffer = require('./checksum-address-of-buffer')

function checksumAddressOfPublicKey(publicKey /*: Buffer */) /*: string */ {
  return checksumAddressOfBuffer(addressOfPublicKey(publicKey))
}

module.exports = checksumAddressOfPublicKey
