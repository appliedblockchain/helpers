// @flow

const get = require('./get')
const mapValues = require('./map-values')

function mapPath/*:: <T: mixed[] | {| [string]: mixed |}> */(value /*: T */, path /*: string | number | (string | number)[] */, defaultValue /*: mixed */) /*: T */ {
  return mapValues(value, _ => get(_, path, defaultValue))
}

module.exports = mapPath
