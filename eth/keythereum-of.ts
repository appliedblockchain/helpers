

import { inspect } from 'util'
const {
  randomBytes,
  createCipheriv
} = require('crypto')
import uuidV4 from '../uuid-v4'
import hexOfBuffer from './hex-of-buffer'
import publicKeyOfPrivateKey from '../public-key-of-private-key'
import addressOfPublicKey from './address-of-public-key'
import scryptOf from '../scrypt-of'
import pbkdf2Of from '../pbkdf2-of'
import keccak256OfBuffer from '../keccak256-of-buffer'
const {
  isBuffer
} = Buffer

const version = 3

const cipher = 'aes-128-ctr'
const defaultKdf = 'scrypt'



type R = {
  address: string
  crypto: {
    cipher: string
    cipherparams: {iv: string;}
    ciphertext: string
    kdf: string
    kdfparams: {c: number;dklen: number;prf: string;salt: string;} | {
      c?: number
      dklen: number
      n?: number
      p?: number
      prf?: string
      r?: number
      salt: string
    }
    mac: string
  }
  id: string
  version: number
}



async function keythereumOf({
  privateKey = randomBytes(32),
  password,
  kdf = defaultKdf,
  iv = randomBytes(16),
  salt = randomBytes(32)
}: {
  privateKey?: Buffer
  password: string
  kdf?: "scrypt" | "pbkdf2"
  iv?: Buffer
  salt?: Buffer
}): Promise<R> {

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
  const {
    derivedKey,
    dklen,
    salt: kdfSalt,
    ...kdfRest
  } = kdf === 'scrypt' ? await scryptOf(password, { salt }) : await pbkdf2Of(password, { salt })

  const cipher_ = createCipheriv(cipher, derivedKey.slice(0, 16), iv)
  const ciphertext = Buffer.concat([cipher_.update(privateKey), cipher_.final()])

  const mac = keccak256OfBuffer(Buffer.concat([derivedKey.slice(16, 32), ciphertext]))

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

export default keythereumOf;
