// @flow

const { isArray } = Array
const { entries } = Object

function mapValues/*:: <T: mixed[] | { [string]: mixed }> */(value /*: T */, f /*: (mixed, mixed, T) => mixed */) /*: T */ {
  return isArray(value) ?
    (value /*: any */).map(f) :
    (entries((value /*: any */))
      .reduce((r, [ k, v ]) => {

        // eslint-disable-next-line no-param-reassign
        r[k] = f(v, k, value)
        return r
      }, {}) /*: any */)
}

module.exports = mapValues
