
import { createECDH } from 'crypto';
const { isBuffer } = Buffer

const secp256k1 = createECDH('secp256k1')

/**
 * TODO: Description of the method
 * @param privateKey Buffer
 */
export function publicKeyOfPrivateKey(privateKey: Buffer ): Buffer {
  if (!isBuffer(privateKey)) {
    throw new TypeError(`Expected buffer, got ${typeof privateKey}.`)
  }
  if (privateKey.length !== 32) {
    throw new TypeError(`Expected buffer of 32 bytes, got ${privateKey.length}.`)
  }
  secp256k1.setPrivateKey(privateKey)
  return secp256k1.getPublicKey().slice(1)
}

export default publicKeyOfPrivateKey;
