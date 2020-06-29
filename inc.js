// @flow

function inc/*:: <T: { ... }> */(target /*: T */, name /*: string */, value /*:: ?: number */ = 1) /*: T */ {
  if (target && (target[name] == null || typeof target[name] === 'number')) {
    target[name] = (target[name] || 0) + value // eslint-disable-line no-param-reassign
  }
  return target
}

module.exports = inc
