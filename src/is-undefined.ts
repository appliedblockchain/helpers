// @flow

function isUndefined(value /*: mixed */) /*: boolean %checks */ {
  return typeof value === 'undefined'
}

module.exports = isUndefined
