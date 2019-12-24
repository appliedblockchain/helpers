// @flow

const { randomBytes } = require('crypto')
const { mask, variantRfc4122 } = require('./uuid')
const uuidStringOfBuffer = require('./uuid-string-of-buffer')

function uuidV4() /*: string */ {
  return uuidStringOfBuffer(mask(randomBytes(16), 4, variantRfc4122))
}

module.exports = uuidV4
