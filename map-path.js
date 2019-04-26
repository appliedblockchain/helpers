// @flow

const get = require('./get')
const mapValues = require('./map-values')

function mapPath(value /*: mixed[] */, path /*: string | number | (string | number)[] */, defaultValue /*: mixed */) /*: mixed[] */ {
  return mapValues(value, _ => get(_, path, defaultValue))
}

module.exports = mapPath
