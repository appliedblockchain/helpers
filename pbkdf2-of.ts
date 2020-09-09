import { randomBytes, pbkdf2 } from 'crypto'

const defaultC = process.env.NODE_ENV === 'test' ? 2 : 262144
const defaultDklen = 32
const defaultHash = 'sha256'
const defaultPrf = 'hmac-sha256'

export const pbkdf2Of =
  async (
    password: string,
    { c = defaultC, dklen = defaultDklen, salt }: { c?: number, dklen?: number, salt?: Buffer } = {}
  ): Promise<{
    c: number,
    dklen: number,
    prf: string,
    salt: Buffer,
    derivedKey: Buffer
  }> => {
    const hash = defaultHash
    const prf = defaultPrf
    const effectiveSalt = salt || randomBytes(32)
    if (!Buffer.isBuffer(effectiveSalt)) {
      throw new TypeError(`Expected salt to be a buffer, got ${typeof effectiveSalt}.`)
    }
    if (effectiveSalt.length < 16) {
      throw new TypeError(`Expected salt length to be at least 16 bytes, got ${effectiveSalt.length}.`)
    }
    return new Promise((resolve, reject) => {
      pbkdf2(password, effectiveSalt, c, dklen, hash, (err: Error | null | undefined, derivedKey: Buffer | null | undefined) => {
        if (err) {
          reject(err)
        } else {
          if (!derivedKey) {
            reject(new TypeError('Unexpected result, err and derived key are both null.'))
            return
          }
          resolve({
            c,
            dklen,
            prf,
            salt: effectiveSalt,
            derivedKey
          })
        }
      })
    })
  }

export default pbkdf2Of
