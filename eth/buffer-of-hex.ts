import { inspect } from 'util'
import evenZeroPaddedOf from './even-zero-padded-of'
import isHex from './is-hex'

export const bufferOfHex =
  (value: string): Buffer => {
    if (!isHex(value)) {
      throw new TypeError(`Expected hex string, got ${inspect(value)}.`)
    }
    return Buffer.from(evenZeroPaddedOf(value), 'hex')
  }

export default bufferOfHex
