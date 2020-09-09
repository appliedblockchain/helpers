import { inspect } from 'util'
import isHex from './is-hex'

export const hex0xOfHex =
  (value: string): string => {
    if (!isHex(value)) {
      throw new TypeError(`Expected hex, got ${inspect(value)}.`)
    }
    return '0x' + value
  }

export default hex0xOfHex
