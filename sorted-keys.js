// @flow

const defaultCmp = require('./default-cmp')
const isObject = require('./is-object')
const { keys: keysOf } = Object

function sortedKeys(value /*: Object */, cmp /*:: ?: (string, string) => -1 | 0 | 1 */ = defaultCmp) /*: string[] */ {
  const keys = isObject(value) ? keysOf(value) : []
  keys.sort(cmp)
  return keys
}

module.exports = sortedKeys
