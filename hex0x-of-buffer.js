const hex0xOfHex = require('./hex0x-of-hex')
const hexOfBuffer = require('./hex-of-buffer')

function hex0xOfBuffer(value /*: Buffer */) /*: string */ {
  return hex0xOfHex(hexOfBuffer(value))
}

module.exports = hex0xOfBuffer
