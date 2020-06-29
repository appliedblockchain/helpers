// @flow

/** @returns membership object (set) for provided list of elements (strings). */
function objectOfStrings(strings /*: string[] */) /*: {| [string]: void | true |} */ {
  return strings.reduce((r, _) => {
    r[_] = true
    return r
  }, {})
}

module.exports = objectOfStrings
