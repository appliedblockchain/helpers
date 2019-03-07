// @flow

const { randomBytes, createCipheriv } = require('crypto')
const uuidV4 = require('./uuid-v4')
const hexOfBuffer = require('./hex-of-buffer')
const hexOfHex0x = require('./hex-of-hex0x')
const publicKeyOfPrivateKey = require('./public-key-of-private-key')
const addressOfPublicKey = require('./address-of-public-key')
const scryptOf = require('./scrypt-of')
const keccak256OfBuffer = require('./keccak256-of-buffer')

const version = 3

const cipher = 'aes-128-ctr'
const kdf = 'scrypt'

async function keythereumOf(
  { privateKey = randomBytes(32), password } /*: {|
    privateKey?: Buffer,
    password: string
  |}*/
) {

  const id = uuidV4()

  const publicKey = publicKeyOfPrivateKey(privateKey)
  const address = addressOfPublicKey(publicKey)
  const { derivedKey, memory, dklen, n, r, p } = await scryptOf(password)

  const iv = randomBytes(16)
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
        memory,
        dklen,
        n,
        r,
        p
      }
    }
  }
}

module.exports = keythereumOf
