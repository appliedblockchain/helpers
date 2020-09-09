import { inspect } from 'util'

const nl = 0x0a
const notFound = -1

export const lineOfBuffer =
  (value: Buffer, offset: number = 0): [null, number] | [string, number] => {
    if (!Buffer.isBuffer(value)) {
      throw new TypeError(`Expected buffer, got ${inspect(value)}.`)
    }
    const index = value.indexOf(nl, offset)
    if (index === notFound) {
      return [null, offset]
    }
    return [value.slice(offset, index - 1).toString('utf8'), index + 1]
  }

export default lineOfBuffer
