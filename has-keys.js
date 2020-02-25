// @flow

const isObject = require('./is-object')

/** @returns `true` if `value` has one or more keys, `false` otherwise. */
const hasKeys /*: any => boolean */ =
  value => {
    if (!isObject(value)) {
      return false
    }
    for (const k in value) {
      return true
    }
    return false
  }

module.exports = hasKeys
