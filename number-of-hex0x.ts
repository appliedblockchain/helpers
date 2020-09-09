import { inspect } from 'util'
import isHex0x from './is-hex0x'

export const numberOfHex0x =
  (value: string): number => {
    if (!isHex0x(value)) {
      throw new TypeError(`Expected hex0x, got ${inspect(value)}.`)
    }
    return parseInt(value.slice(2), 16)
  }

export default numberOfHex0x
