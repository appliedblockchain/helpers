// @flow

/**
 * Default comparision function.
 *
 * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort#Description
 */
function defaultCmp(x /*: any */, y /*: any */) /*: -1 | 0 | 1 */ {
  return x === y ?
    0 :
    x < y ? -1 : 1
}

module.exports = defaultCmp
