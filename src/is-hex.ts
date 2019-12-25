
import isString from './is-string';

const re = /^[0-9a-fA-F]*$/

export function isHex(value: any) : boolean {
  return (
    isString(value) &&
    re.test(value)
  )
}

export default isHex;
