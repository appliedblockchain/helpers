import { inspect } from 'util'
import isUint32 from './is-uint32'

export const buffer32OfNumber =
  (value: number): Buffer => {
    if (!Number.isSafeInteger(value)) {
      throw new TypeError(`Expected safe integer, got ${inspect(value)}.`)
    }
    const absValue = Math.abs(value)
    if (isUint32(absValue)) {
      const buffer = Buffer.alloc(32)
      buffer.writeUInt32BE(value, 16)
      if (value < 0) {
        buffer.writeUInt16BE(0xffff, 0)
      }
      return buffer
    }
    return value >= 0 ?
      Buffer.from(absValue.toString(16).padStart(64, '0')) :
      Buffer.from(absValue.toString(16).padStart(64, 'ffff0000000000000000000000000000'))
  }

export default buffer32OfNumber
