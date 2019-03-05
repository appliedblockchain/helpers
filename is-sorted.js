// @flow

const { inspect } = require('util')
const defaultCmp = require('./default-cmp')
const { isArray } = Array

function isSorted/*:: <T> */(xs /*: T[] */, cmp /*:: ?: (T, T) => -1 | 0 | 1 */ = defaultCmp) /*: boolean */ {
  if (!isArray(xs)) {
    throw new TypeError(`Expected array, got ${inspect(xs)}.`)
  }
  const n = xs.length
  if (n < 2) {
    return true
  }
  let p = xs[0]
  for (let i = 1; i < n; i++) {
    if (cmp(p, xs[i]) === 1) {
      return false
    }
    p = xs[i]
  }
  return true
}

module.exports = isSorted
