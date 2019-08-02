// @flow

function has(value /*: mixed */, key /*: string */) /*: boolean */ {
  return value != null && Object.prototype.hasOwnProperty.call(value, key)
}

module.exports = has
