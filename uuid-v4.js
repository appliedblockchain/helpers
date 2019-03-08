// @flow

const { randomBytes } = require('crypto')

const h = []

for (let i = 0; i < 0xff; ++i) {
  h[i] = i.toString(16).padStart(2, '0')
}

function uuidV4() {
  const x = randomBytes(16)
  x[6] = (x[6] & 0x0f) | 0x40
  x[8] = (x[8] & 0x3f) | 0x80
  let i = 0
  return [
    h[x[i++]], h[x[i++]], h[x[i++]], h[x[i++]], '-',
    h[x[i++]], h[x[i++]], '-',
    h[x[i++]], h[x[i++]], '-',
    h[x[i++]], h[x[i++]], '-',
    h[x[i++]], h[x[i++]], h[x[i++]], h[x[i++]], h[x[i++]], h[x[i++]]
  ].join('')
}

module.exports = uuidV4
