import addressOfPrivateKey from './address-of-private-key'
import checksumAddressOfBuffer from './checksum-address-of-buffer'

/** @returns ethereum checksum address for provided `privateKey`. */
export const checksumAddressOfPrivateKey =
  (privateKey: Buffer): string =>
    checksumAddressOfBuffer(addressOfPrivateKey(privateKey))

export default checksumAddressOfPrivateKey