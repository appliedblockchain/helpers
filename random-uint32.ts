import { randomBytes } from 'crypto'

/** @returns random unsigned integer that fits 32 bits. */
const randomUint32 =
  (): number =>
    randomBytes(4).readUInt32BE(0)

export default randomUint32