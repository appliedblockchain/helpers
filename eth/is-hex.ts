import isString from '../is-string'

const re = /^[0-9a-fA-F]*$/

export const isHex =
  (value: unknown): value is string =>
    isString(value) && re.test(value)

export default isHex
