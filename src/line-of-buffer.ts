// @flow

const { inspect } = require('util')
const { isBuffer } = Buffer

const nl = 0x0a
const notFound = -1

function lineOfBuffer(value /*: Buffer */, offset /*:: ?: number */ = 0) /*: [ ?string, number ] */ {
  if (!isBuffer(value)) {
    throw new TypeError(`Expected buffer, got ${inspect(value)}.`)
  }
  const index = value.indexOf(nl, offset)
  if (index === notFound) {
    return [ null, offset ]
  }
  return [ value.slice(offset, index - 1).toString('utf8'), index + 1 ]
}

module.exports = lineOfBuffer
