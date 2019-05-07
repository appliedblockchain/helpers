// @flow

const addressOfPrivateKey = require('./address-of-public-key')
const checksumAddressOfBuffer = require('./checksum-address-of-buffer')

function checksumAddressOfPrivateKey(privateKey /*: Buffer */) /*: string */ {
  return checksumAddressOfBuffer(addressOfPrivateKey(privateKey))
}

module.exports = checksumAddressOfPrivateKey
