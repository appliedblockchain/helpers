// @flow strict

/**
 * Default comparision function.
 *
 * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort#Description
 */
export const defaultCmp =
  <T>(a: T, b: T): -1 | 0 | 1 =>
    a > b ?
      1 :
      a < b ?
        -1 :
        0

export default defaultCmp
