import isHex0x from '../is-hex0x'

export function isAddress(value: unknown): value is string {
  return isHex0x(value) && value.length === 2 + 2 * 20
}

export default isAddress
