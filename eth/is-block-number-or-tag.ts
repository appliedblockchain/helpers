import isHex0x from './is-hex0x'

// TODO: Check if safe integer.
export function isBlockNumberOrTag(value: unknown): value is string {
  return (
    isHex0x(value) ||
    value === 'earliest' ||
    value === 'latest' ||
    value === 'pending'
  )
}

export default isBlockNumberOrTag
