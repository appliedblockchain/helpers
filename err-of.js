// @flow

const Err = require('./err')

function errOf(code /*: number | string */, message /*:: ?: string */, info /*:: ?: Object */) {
  return new Err(code, message, info)
}

module.exports = errOf
