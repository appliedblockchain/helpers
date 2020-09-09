import { inspect } from 'util'
import isHex0x from './is-hex0x'

export const hexOfHex0x =
  (value: string): string => {
    if (!isHex0x(value)) {
      throw new TypeError(`Expected hex0x, got ${inspect(value)}.`)
    }
    return value.slice(2)
  }

export default hexOfHex0x
