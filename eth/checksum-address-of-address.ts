import bufferOfHex0x from './buffer-of-hex0x'
import checksumAddressOfBuffer from './checksum-address-of-buffer'

export const checksumAddressOfAddress =
  (address: string): string =>
    checksumAddressOfBuffer(bufferOfHex0x(address))

export default checksumAddressOfAddress
