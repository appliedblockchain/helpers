import isString from '../is-string'
import isHex from './is-hex'

export const isHex0x =
  (value: unknown): value is string =>
    (isString(value) && value.startsWith('0x') && isHex(value.slice(2)))

export default isHex0x
