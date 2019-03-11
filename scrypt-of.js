// @flow

const { inspect } = require('util')
const { randomBytes } = require('crypto')
const scrypt = require('./crypto-scrypt')
const { isBuffer } = Buffer

const defaultN = process.env.NODE_ENV === 'test' ? 2 : 16384
const defaultDklen = 32
const defaultR = 8
const defaultP = 1
const defaultMemory = 32 * 1024 * 1024

if (128 * defaultN * defaultR > defaultMemory) {
  throw new Error(`Invalid scrypt defaults ${inspect({ defaultN, defaultR, defaultMemory })}.`)
}

function scryptOf(
  password /*: string */,
  { n = defaultN, dklen = defaultDklen, r = defaultR, p = defaultP, memory = defaultMemory, salt } /*: {|
    n?: number,
    dklen?: number,
    r?: number,
    p?: number,
    memory?: number,
    salt?: Buffer
  |} */ = {}
) /*: Promise<{|
  memory: number,
  n: number,
  dklen: number,
  r: number,
  p: number,
  salt: Buffer,
  derivedKey: Buffer
|}> */ {
  const effectiveSalt = salt || randomBytes(16)
  if (!isBuffer(effectiveSalt)) {
    throw new TypeError(`Expected salt to be a buffer, got ${typeof effectiveSalt}.`)
  }
  if (effectiveSalt.length !== 16) {
    throw new TypeError(`Expected salt length to be 16, got ${effectiveSalt.length}.`)
  }
  return new Promise((resolve, reject) => {
    scrypt(password, effectiveSalt, dklen, { N: n, r, p, maxmem: memory }, (err, derivedKey) => {
      if (err) {
        reject(err)
      } else {
        if (!derivedKey) {
          reject(new TypeError('Unexpected result, err and derived key are both null.'))
          return
        }
        resolve({ n, memory, dklen, r, p, salt: effectiveSalt, derivedKey })
      }
    })
  })
}

module.exports = scryptOf
