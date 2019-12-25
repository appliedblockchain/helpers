
import { inspect } from 'util';
import isHex from './is-hex';
import isHex0x from './is-hex0x';

/**
 * Returns `Buffer` representation of provided hex (ie. `"ff"`) or hex0x (ie. `"0xff"`) string.
 * @throws TypeError On invalid input.
 */
export function bufferOfHexOrHex0x(value : string): Buffer {
  if (isHex(value)) {
    return Buffer.from(value, 'hex')
  }
  if (isHex0x(value)) {
    return Buffer.from(value.slice(2), 'hex')
  }
  throw new TypeError(`Expected hex or hex0x string, got ${inspect(value)}.`)
}

export default bufferOfHexOrHex0x;
