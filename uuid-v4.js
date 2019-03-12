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
  return [
    h[x[0]], h[x[1]], h[x[2]], h[x[3]], '-',
    h[x[4]], h[x[5]], '-',
    h[x[6]], h[x[7]], '-',
    h[x[8]], h[x[9]], '-',
    h[x[10]], h[x[11]], h[x[12]], h[x[13]], h[x[14]], h[x[15]]
  ].join('')
}

module.exports = uuidV4
