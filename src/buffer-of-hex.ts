
import { inspect } from 'util';
const { from: bufferOf } = Buffer
import evenZeroPaddedOf from './even-zero-padded-of';
import isHex from './is-hex';

/** @returns buffer representation of provided hex string. */
export function bufferOfHex(value: string): Buffer {
  if (!isHex(value)) {
    throw new TypeError(`Expected hex string, got ${inspect(value)}.`)
  }
  return bufferOf(evenZeroPaddedOf(value), 'hex')
}

export default bufferOfHex;
