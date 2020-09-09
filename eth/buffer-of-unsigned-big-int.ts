import { inspect } from 'util'
import bufferOfHex from './buffer-of-hex'

export const bufferOfUnsignedBigInt =
  (value: BigInt): Buffer => {
    if (value < BigInt(0)) {
      throw new TypeError(`Expected non-negative bigint value, got ${inspect(value)}.`)
    }
    return bufferOfHex(value.toString(16))
  }

export default bufferOfUnsignedBigInt
