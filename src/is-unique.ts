// @flow

const { inspect } = require('util')
const defaultCmp = require('./default-cmp')
const { isArray } = Array

function isUnique/*:: <T> */(unsortedXs /*: T[] */, cmp /*:: ?: (T, T) => -1 | 0 | 1 */ = defaultCmp) /*: boolean */ {
  if (!isArray(unsortedXs)) {
    throw new TypeError(`Expected array, got ${inspect(unsortedXs)}.`)
  }
  const n = unsortedXs.length
  if (n < 2) {
    return true
  }
  const xs = unsortedXs.slice(0)
  xs.sort(cmp)
  let p = xs[0]
  for (let i = 1; i < n; i++) {
    switch (cmp(p, xs[i])) {
      case 0:
        return false
      case 1:
        throw new Error(`Unexpected comparision result 1 p ${inspect(p)} xs[i] ${inspect(xs[i])} i ${i}.`)
    }
    p = xs[i]
  }
  return true
}

module.exports = isUnique
