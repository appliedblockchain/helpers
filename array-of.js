// @flow

function arrayOf/*:: <T> */(n /*:: ?: number */ = 0, f /*:: ?: number => T */ = _ => (_ /*: any */)) /*: T[] */ {
  return Array.from(new Array(n), (_, i) => f(i))
}

module.exports = arrayOf
