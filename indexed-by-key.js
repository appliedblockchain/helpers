// @flow

/** @returns transposed entries from xs, indexed by `key`. Non-unique keys will overwrite previous values.
    Non-existing keys will be indexed under `undefined` key. */
function indexedByKey/*:: <K: string, T: { [K]: string }> */(xs /*: T[] */, key /*: K */) /*: { [string]: T } */ {
  return xs.reduce((r, _) => {
    r[_[key]] = _
    return r
  }, {})
}

module.exports = indexedByKey
