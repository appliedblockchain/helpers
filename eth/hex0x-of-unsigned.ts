import hexOfUnsigned from './hex-of-unsigned'

/** @returns 0x-prefixed hex string representation of a safe, unsigned number. */
export const hex0xOfUnsigned =
  (value: number): string =>
    '0x' + hexOfUnsigned(value)

export default hex0xOfUnsigned
