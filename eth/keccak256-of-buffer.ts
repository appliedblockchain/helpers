import { inspect } from 'util'
import S_f1600_ from './keccak256-f1600'

const S = new ArrayBuffer(200)
const s = new Uint32Array(S)
const B = new Uint8Array(S)

function S_zero() {
  for (let i = 0; i < 200; i++) {
    B[i] = 0
  }
}

function S_f1600() {
  S_f1600_(s)
}

function keccak256(xs: Buffer) {

  const xn = xs.length

  S_zero()

  let i = 0
  for (; i < xn - 136; i += 136) {
    for (let j = 0; j < 136; j++) {
      B[j] ^= xs[i + j]
    }
    S_f1600()
  }

  for (let j = 0; i < xn; i++, j++) {
    B[j] ^= xs[i]
  }

  B[xn % 136] ^= 0x01
  B[135] ^= 0x80

  S_f1600()

  return B.slice(0, 32)
}

export function keccak256OfBuffer(value: Buffer): Buffer {
  if (!Buffer.isBuffer(value)) {
    throw new TypeError(`Expected buffer, got ${inspect(value)}.`)
  }
  return Buffer.from(keccak256(value))
}

export default keccak256OfBuffer
