// @flow

const publicKeyOfPrivateKey = require('./public-key-of-private-key')
const addressOfPublicKey = require('./address-of-public-key')

/** @returns ethereum address of provided `privateKey`. */
function addressOfPrivateKey(privateKey /*: Buffer */) /*: Buffer */ {
  return addressOfPublicKey(publicKeyOfPrivateKey(privateKey))
}

module.exports = addressOfPrivateKey
