
import isHex0x from './is-hex0x';

// TODO: Check if safe integer.
function isBlockNumberOrTag(value: any): boolean {
  return (
    isHex0x(value) ||
    value === 'earliest' ||
    value === 'latest' ||
    value === 'pending'
  )
}

export default isBlockNumberOrTag;
