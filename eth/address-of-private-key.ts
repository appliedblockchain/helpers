import addressOfPublicKey from './address-of-public-key'
import publicKeyOfPrivateKey from './public-key-of-private-key'

/** @returns ethereum address of provided `privateKey`. */
export const addressOfPrivateKey =
  (privateKey: Buffer): Buffer =>
    addressOfPublicKey(publicKeyOfPrivateKey(privateKey))

export default addressOfPrivateKey
