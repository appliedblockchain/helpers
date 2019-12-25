// @flow

import { inspect } from 'util';
import evenZeroPaddedOf from './even-zero-padded-of';
import isHex0x from './is-hex0x';

const { from: bufferOf } = Buffer

/** @returns buffer representation of provided hex0x string. */
export function bufferOfHex0x(value: string ) : Buffer {
  if (!isHex0x(value)) {
    throw new TypeError(`Expected hex0x string, got ${inspect(value)}.`)
  }
  return bufferOf(evenZeroPaddedOf(value.slice(2)), 'hex')
}

export default bufferOfHex0x;
