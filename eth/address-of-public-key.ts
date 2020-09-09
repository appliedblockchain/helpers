import { inspect } from 'util'
import keccak256OfBuffer from './keccak256-of-buffer'

/** @returns ethereum address for provided `publicKey`. */
export const addressOfPublicKey =
  (publicKey: Buffer): Buffer => {
    if (!Buffer.isBuffer(publicKey)) {
      throw new TypeError(`Expected public key buffer, got ${inspect(publicKey)}.`)
    }
    if (publicKey.length !== 64) {
      throw new TypeError(`Expected public key buffer of 64 bytes, got ${inspect(publicKey.length)}.`)
    }
    return keccak256OfBuffer(publicKey).slice(-20)
  }

export default addressOfPublicKey
