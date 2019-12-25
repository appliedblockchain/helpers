// @flow

import hexOfUnsigned from './hex-of-unsigned';

/** @returns 0x-prefixed hex string representation of a safe, unsigned number. */
export function hex0xOfUnsigned(value : number ) : string  {
  return '0x' + hexOfUnsigned(value)
}

export default hex0xOfUnsigned;
