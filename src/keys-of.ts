// @flow

const isObject = require('./is-object')

function keysOf(value /*: mixed */) /*: string[] */ {
  return isObject(value) ? Object.keys(value) : []
}

module.exports = keysOf
