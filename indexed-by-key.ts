/** @returns transposed entries from xs, indexed by `key`. Non-unique keys will overwrite previous values.
    Non-existing keys will be indexed under `undefined` key. */
export function indexedByKey<T extends {}>(values: T[], key: string): { [key: string]: T } {
  return values.reduce((r, _) => {
    r[_[key]] = _
    return r
  }, {})
}

export default indexedByKey
