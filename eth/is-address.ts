import isHex0x from './is-hex0x'

const isAddress =
  (value: unknown): value is string =>
    isHex0x(value) && value.length === 2 + (2 * 20)

export default isAddress
