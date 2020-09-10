// @flow

const Err = require('./err')

function warnOf(code /*: number | string */, message /*:: ?: string */, info /*:: ?: Object */) {
  return new Err('warn', code, message, info)
}

module.exports = warnOf
