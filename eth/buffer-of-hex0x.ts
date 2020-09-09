import { inspect } from 'util'
import evenZeroPaddedOf from './even-zero-padded-of'
import isHex0x from './is-hex0x'

/** @returns buffer representation of provided hex0x string. */
export const bufferOfHex0x =
  (value: string): Buffer => {
    if (!isHex0x(value)) {
      throw new TypeError(`Expected hex0x string, got ${inspect(value)}.`)
    }
    return Buffer.from(evenZeroPaddedOf(value.slice(2)), 'hex')
  }

export default bufferOfHex0x