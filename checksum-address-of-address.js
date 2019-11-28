// @flow

const bufferOfHex0x = require('./buffer-of-hex0x')
const checksumAddressOfBuffer = require('./checksum-address-of-buffer')

function checksumAddressOfAddress(address /*: string */) /*: string */ {
  return checksumAddressOfBuffer(bufferOfHex0x(address))
}

module.exports = checksumAddressOfAddress
