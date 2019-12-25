
import { inspect } from 'util';
import isSafeUnsigned from './is-safe-unsigned';
import evenZeroPaddedOf from './even-zero-padded-of';

/** @returns even/byte-padded, hex string representation of a safe, unsigned number. */
export function hexOfUnsigned(value : number ) : string  {
  if (!isSafeUnsigned(value)) {
    throw new TypeError(`Expected safe, unsigned number, got ${inspect(value)}.`)
  }
  return evenZeroPaddedOf(value.toString(16))
}

export default hexOfUnsigned;
