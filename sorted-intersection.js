// @flow

const { inspect } = require('util')
const defaultCmp = require('./default-cmp')
const { min } = Math

/**
 * Computes intersection in linear time between two, unique, ascending arrays of values.
 * Comparision function can be flipped for descending arrays.
 * Leaks values of arrays in thrown error.
 */
function sortedIntersection/*:: <T> */(
  xs /*: T[] */,
  ys /*: T[] */,
  cmp /*:: ?: (T, T) => -1 | 0 | 1 */ = defaultCmp
) /*: T[] */ {
  const rs = []
  const xn = xs.length
  const yn = ys.length
  let xi = 0
  let yi = 0
  while (xi < xn && yi < yn) {
    const x = xs[xi]
    const y = ys[yi]
    const c = cmp(x, y)
    switch (c) {

      case 0:
        rs.push(x)

        // TODO: Handle non-descending (duplicates).
        xi++
        yi++
        break

      case -1:
        xi++
        break

      case 1:
        yi++
        break

      default:

        // NOTE: May leak sensitive information.
        throw new TypeError(`Unexpected cmp result ${inspect(c)} for ${inspect(x)} and ${inspect(y)} values.`)

    }
  }
  return rs
}

module.exports = sortedIntersection
