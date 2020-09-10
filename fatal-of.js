// @flow

const Err = require('./err')

function fatalOf(code /*: number | string */, message /*:: ?: string */, info /*:: ?: Object */) {
  return new Err('fatal', code, message, info)
}

module.exports = fatalOf
