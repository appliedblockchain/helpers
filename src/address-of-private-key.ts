import publicKeyOfPrivateKey from './public-key-of-private-key';
import addressOfPublicKey from './address-of-public-key';

/**
 * Returns ethereum address of provided `privateKey` 
 * @param privateKey 
 */
function addressOfPrivateKey(privateKey: Buffer): Buffer {
  return addressOfPublicKey(publicKeyOfPrivateKey(privateKey))
}

module.exports = addressOfPrivateKey
