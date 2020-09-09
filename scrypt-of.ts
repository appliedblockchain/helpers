import { randomBytes } from 'crypto'
import { scrypt } from 'crypto'

export const defaultN = process.env.NODE_ENV === 'test' ?
  2 :
  16384
export const defaultDklen = 32
export const defaultR = 8
export const defaultP = 1

export type Options = {
  n?: number,
  dklen?: number,
  r?: number,
  p?: number,
  salt?: Buffer
}

export type R = {
  n: number,
  dklen: number,
  r: number,
  p: number,
  salt: Buffer,
  derivedKey: Buffer
}

const scryptOf =
  (password: string, { n = defaultN, dklen = defaultDklen, r = defaultR, p = defaultP, salt }: Options = {}): Promise<R> => {
    const effectiveSalt = salt || randomBytes(32)
    if (!Buffer.isBuffer(effectiveSalt)) {
      throw new TypeError(`Expected salt to be a buffer, got ${typeof effectiveSalt}.`)
    }
    if (effectiveSalt.length < 16) {
      throw new TypeError(`Expected salt length to be at least 16 bytes, got ${effectiveSalt.length}.`)
    }
    return new Promise((resolve, reject) => {
      scrypt(password, effectiveSalt, dklen, { N: n, r, p }, (err, derivedKey) => {
        if (err) {
          reject(err)
        } else {
          if (!derivedKey) {
            reject(new TypeError('Unexpected result, err and derived key are both null.'))
            return
          }
          resolve({ n, dklen, r, p, salt: effectiveSalt, derivedKey })
        }
      })
    })
  }

export default scryptOf
