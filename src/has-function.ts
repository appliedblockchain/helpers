// @flow

function hasFunction(value /*: any */, key /*: string */) /*: boolean %checks */{
  return value != null && typeof value[key] === 'function'
}

module.exports = hasFunction
