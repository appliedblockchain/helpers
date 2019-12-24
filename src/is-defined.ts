// @flow

function isDefined(value /*: mixed */) /*: boolean %checks */ {
  return typeof value !== 'undefined'
}

module.exports = isDefined
