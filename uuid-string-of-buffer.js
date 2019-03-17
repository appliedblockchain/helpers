// @flow

const { inspect } = require('util')
const { isBuffer } = Buffer

const h = []

for (let i = 0; i <= 0xff; ++i) {
  h[i] = i.toString(16).padStart(2, '0')
}

function uuidStringOfBuffer(v /*: Buffer */) /*: string */ {
  if (!isBuffer(v)) {
    throw new TypeError(`Expected buffer, got ${inspect(v)}.`)
  }
  return [
    h[v[0]], h[v[1]], h[v[2]], h[v[3]], '-',
    h[v[4]], h[v[5]], '-',
    h[v[6]], h[v[7]], '-',
    h[v[8]], h[v[9]], '-',
    h[v[10]], h[v[11]], h[v[12]], h[v[13]], h[v[14]], h[v[15]]
  ].join('')
}

module.exports = uuidStringOfBuffer
