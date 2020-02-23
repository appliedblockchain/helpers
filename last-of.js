// @flow

const { isArray } = Array

const lastOf /*: <T>(T[]) => T */ = /*:: <T> */
  (xs) => {
    if (!isArray(xs) || !xs.length) {
      throw new TypeError('Expected non empty array.')
    }
    return xs[xs.length - 1]
  }

module.exports = lastOf
