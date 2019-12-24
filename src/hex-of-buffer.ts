// @flow

const { inspect } = require('util')
const { isBuffer } = Buffer

function hexOfBuffer(value /*: Buffer */) /*: string */ {
  if (!isBuffer(value)) {
    throw new TypeError(`Expected buffer, got ${inspect(value)}.`)
  }
  return value.toString('hex')
}

module.exports = hexOfBuffer
