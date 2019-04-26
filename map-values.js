// @flow

const { isArray } = Array
const { entries } = Object

function mapValues(value /*: mixed[] | { [string]: mixed } */, f /*: (mixed, string, mixed) => mixed */) {
  return isArray(value) ?
    value.map(f) :
    entries(value)
      .reduce((r, [ k, v ]) => {
        r[k] = f(v, k, value)
        return r
      }, {})
}

module.exports = mapValues
