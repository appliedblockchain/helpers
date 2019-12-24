// @flow

function isObject(value /*: mixed */) /*: boolean %checks */ {
  return (
    typeof value === 'object' &&
    value != null
  )
}

module.exports = isObject
