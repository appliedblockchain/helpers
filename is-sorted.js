// @flow

const { inspect } = require('util')

const { isArray } = Array

function defaultCmp(x /*: any */, y /*: any */) /*: -1 | 0 | 1 */ {
  return x == y ?
    0 :
    x < y ? 1 : -1
}

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
    if (cmp(p, xs[i]) === -1) {
      return false
    }
    p = xs[i]
  }
  return true
}

module.exports = isSorted
