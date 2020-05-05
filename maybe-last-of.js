// @flow

const { isArray } = Array

const maybeLastOf /*: <T>(T[]) => void | T */ = /*:: <T> */
  (xs) =>
    isArray(xs) && xs.length ?
      xs[xs.length - 1] :
      undefined

module.exports = maybeLastOf
