// @flow

function isBoolean(value /*: mixed */) /*: boolean %checks */ {
  return typeof value === 'boolean'
}

module.exports = isBoolean
