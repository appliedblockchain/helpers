// @flow

/** @returns transposed entries from xs, indexed by `key`. Non-unique keys will overwrite previous values.
    Non-existing keys will be indexed under `undefined` key. */
function indexedByKey/*:: <T: { ... }> */(values /*: T[] */, key /*: string */) /*: {| [string]: T |} */ {
  return values.reduce((r, _) => {
    r[_[key]] = _
    return r
  }, {})
}

module.exports = indexedByKey
