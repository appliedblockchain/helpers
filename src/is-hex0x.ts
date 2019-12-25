// @flow

import isString from './is-string';
import isHex from './is-hex';

export function isHex0x(value: any): boolean {
  return (
    isString(value) &&
    value.startsWith('0x') &&
    isHex(value.slice(2))
  )
}

export default isHex0x;
