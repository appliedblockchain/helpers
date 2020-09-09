import { inspect } from 'util'
import hexOfUnsigned from './hex-of-unsigned'
import isSafeUnsigned from './is-safe-unsigned'

/** @returns the smallest buffer representation of provided safe, unsigned integer number. When input is `0` - empty buffer is returned. */
export const bufferOfUnsigned: (value: number) => Buffer =
  value => {
    if (!isSafeUnsigned(value)) {
      throw new TypeError(`Expected safe unsigned number, got ${inspect(value)}.`)
    }
    return value === 0 ? Buffer.from([]) : Buffer.from(hexOfUnsigned(value), 'hex')
  }

export default bufferOfUnsigned