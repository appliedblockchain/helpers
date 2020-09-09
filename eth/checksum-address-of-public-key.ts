import addressOfPublicKey from './address-of-public-key'
import checksumAddressOfBuffer from './checksum-address-of-buffer'

/** @returns ethereum checksum address for provided `publicKey`. */
export const checksumAddressOfPublicKey =
  (publicKey: Buffer): string =>
    checksumAddressOfBuffer(addressOfPublicKey(publicKey))

export default checksumAddressOfPublicKey