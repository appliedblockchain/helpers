// @flow

const { randomBytes } = require('crypto')
const scrypt = require('./crypto-scrypt')
const { isBuffer } = Buffer

const defaultN = process.env.NODE_ENV === 'test' ? 2 : 16384
const defaultDklen = 32
const defaultR = 8
const defaultP = 1

function scryptOf(
  password /*: string */,
  { n = defaultN, dklen = defaultDklen, r = defaultR, p = defaultP, salt } /*: {|
    n?: number,
    dklen?: number,
    r?: number,
    p?: number,
    salt?: Buffer
  |} */ = {}
) /*: Promise<{|
  n: number,
  dklen: number,
  r: number,
  p: number,
  salt: Buffer,
  derivedKey: Buffer
|}> */ { /* eslint-disable-line brace-style */
  const effectiveSalt = salt || randomBytes(32)
  if (!isBuffer(effectiveSalt)) {
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

module.exports = scryptOf
