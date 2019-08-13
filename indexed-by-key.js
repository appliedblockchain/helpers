// @flow

/** @returns transposed entries from xs, indexed by `key`. Non-unique keys will overwrite previous values.
    Non-existing keys will be indexed under `undefined` key. */
function indexedByKey/*:: <T> */(xs /*: T[] */, key /*: string */) /*: { [string]: T } */ {
  return xs.reduce((r, _) => {
    r[_[key]] = _
    return r
  }, {})
}

module.exports = indexedByKey
