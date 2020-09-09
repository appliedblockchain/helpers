import { inspect } from 'util'

export const hexOfBuffer =
  (value: Buffer): string => {
    if (!Buffer.isBuffer(value)) {
      throw new TypeError(`Expected buffer, got ${inspect(value)}.`)
    }
    return '0x' + value.toString('hex')
  }

export default hexOfBuffer
