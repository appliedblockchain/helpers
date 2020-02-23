// @flow

const { isArray } = Array

const firstOf /*: <T>(T[]) => T */ = /*:: <T> */
  (xs) => {
    if (!isArray(xs) || !xs.length) {
      throw new TypeError('Expected non empty array.')
    }
    return xs[0]
  }

module.exports = firstOf
