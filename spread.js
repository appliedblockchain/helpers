// @flow

const { inspect } = require('util')
const isSafePositive = require('./is-safe-positive')
const { min } = Math

/** Spread `n` calls to `f` function `ms` milliseconds apart. */
async function spread(n /*: number */, ms /*: number */, f /*: () => Promise<any> */) /*: Promise<any[]> */ {
  if (!isSafePositive(n) || n > 1024) {
    throw new TypeError(`Expected n to be integer in <1..1024> range, got ${inspect(n)}.`)
  }
  return Promise.all(Array.from(new Array(n)).map((_, i) => new Promise((resolve, reject) => {
    setTimeout(() => {
      try {
        resolve(f())
      } catch (err) {
        reject(err)
      }
    }, i * ms)
  })))
}

module.exports = spread
