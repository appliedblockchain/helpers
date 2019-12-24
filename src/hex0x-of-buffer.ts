// @flow

const { inspect } = require('util')
const { isBuffer } = Buffer

function hexOfBuffer(value /*: Buffer */) /*: string */ {
  if (!isBuffer(value)) {
    throw new TypeError(`Expected buffer, got ${inspect(value)}.`)
  }
  return '0x' + value.toString('hex')
}

module.exports = hexOfBuffer
