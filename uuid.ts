import { inspect } from 'util'

// Unknown (i.e. custom, your own).
export const variantUnknown = Symbol('variantUnknown')

// Reserved by the NCS for backward compatibility.
export const variantNcs = Symbol('variantNcs')

// Reserved for RFC4122 Specification (default).
export const variantRfc4122 = Symbol('variantRfc4122')

// Reserved by Microsoft for backward compatibility (GUID).
export const variantMicrosoft = Symbol('variantMicrosoft')

// Reserved for future expansion.
export const variantFuture = Symbol('variantFuture')

export const mask =
  (bytes_: Buffer, version = 4, variant: symbol = variantRfc4122): Buffer => {
    const bytes = Buffer.from(bytes_)

    if (!Buffer.isBuffer(bytes) || bytes.length !== 16) {
      throw new TypeError(`Expected buffer of 16 bytes, got ${inspect(bytes)}.`)
    }

    switch (variant) {
      case variantUnknown:
        break
      case variantNcs:
        bytes[8] = bytes[8] & 0x7f
        break
      case variantRfc4122:
        bytes[8] = (bytes[8] & 0x3f) | 0x80
        break
      case variantMicrosoft:
        bytes[8] = (bytes[8] & 0x1f) | 0xc0
        break
      case variantFuture:
        bytes[8] = (bytes[8] & 0x1f) | 0xe0
        break
      default:
        throw new TypeError(`Unhandled variant ${inspect(variant)}.`)
    }

    switch (version) {
      case 1:
      case 2:
      case 3:
      case 4:
      case 5:
        bytes[6] = (bytes[6] & 0xf) | (version << 4)
        break
      default:
        throw new TypeError(`Unhandled version ${inspect(version)}.`)
    }

    return bytes
  }

export default mask
