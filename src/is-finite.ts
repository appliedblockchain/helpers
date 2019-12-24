// @flow

function isFinite(value /*: mixed */) /*: boolean %checks */ {
  return typeof value === 'number' && Number.isFinite(value)
}

module.exports = isFinite
