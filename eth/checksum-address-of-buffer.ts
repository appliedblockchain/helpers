import { inspect } from 'util'
import hexOfBuffer from './hex-of-buffer'
import keccak256OfBuffer from './keccak256-of-buffer'

/** @returns ethereum checksum address for provided address buffer `value`. */
const checksumAddressOfBuffer =
  (value: Buffer): string => {
    if (!Buffer.isBuffer(value) || value.length !== 20) {
      throw new TypeError(`Expected 20 bytes buffer, got ${inspect(value)}.`)
    }
    const address = hexOfBuffer(value)
    const hash = hexOfBuffer(keccak256OfBuffer(Buffer.from(hexOfBuffer(value), 'ascii')))
    return '0x' + address.split('').map((c, i) => parseInt(hash[i], 16) >= 8 ? c.toUpperCase() : c.toLowerCase()).join('')
  }

export default checksumAddressOfBuffer
