// @flow

const { inspect } = require('util')
const { randomBytes, createCipheriv } = require('crypto')
const uuidV4 = require('./uuid-v4')
const hexOfBuffer = require('./hex-of-buffer')
const hexOfHex0x = require('./hex-of-hex0x')
const publicKeyOfPrivateKey = require('./public-key-of-private-key')
const addressOfPublicKey = require('./address-of-public-key')
const scryptOf = require('./scrypt-of')
const pbkdf2Of = require('./pbkdf2-of')
const keccak256OfBuffer = require('./keccak256-of-buffer')
const { isBuffer } = Buffer

const version = 3

const cipher = 'aes-128-ctr'
const defaultKdf = 'scrypt'

async function keythereumOf(
  { privateKey = randomBytes(32), password, kdf = defaultKdf, iv = randomBytes(16), salt = randomBytes(32) } /*: {|
    privateKey?: Buffer,
    password: string,
    kdf?: 'scrypt' | 'pbkdf2',
    iv?: Buffer,
    salt?: Buffer
  |}*/
) {

  if (kdf !== 'scrypt' && kdf !== 'pbkdf2') {
    throw new TypeError(`Expected kdf 'scrypt' or 'pbkdf2', got ${inspect(kdf)}.`)
  }

  if (!isBuffer(iv) || iv.length !== 16) {
    throw new TypeError(`Expected iv buffer of 16 bytes, got ${inspect(iv)}.`)
  }

  if (!isBuffer(salt) || salt.length < 16) {
    throw new TypeError(`Expected salt buffer of at least 16 bytes, got ${inspect(salt)}.`)
  }

  const id = uuidV4()

  const publicKey = publicKeyOfPrivateKey(privateKey)
  const address = addressOfPublicKey(publicKey)
  const { derivedKey, dklen, salt: kdfSalt, ...kdfRest } = kdf === 'scrypt' ?
    await scryptOf(password, { salt }) :
    await pbkdf2Of(password, { salt })

  const cipher_ = createCipheriv(cipher, derivedKey.slice(0, 16), iv)
  const ciphertext = Buffer.concat([
    cipher_.update(privateKey),
    cipher_.final()
  ])

  const mac = keccak256OfBuffer(Buffer.concat([
    derivedKey.slice(16, 32),
    ciphertext
  ]))

  return {
    version,
    id,
    address: hexOfBuffer(address),
    crypto: {
      cipher,
      ciphertext: hexOfBuffer(ciphertext),
      cipherparams: {
        iv: hexOfBuffer(iv)
      },
      mac: hexOfBuffer(mac),
      kdf,
      kdfparams: {
        dklen,
        salt: hexOfBuffer(kdfSalt),
        ...kdfRest
      }
    }
  }
}

module.exports = keythereumOf
