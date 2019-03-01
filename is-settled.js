// @flow

const isPending = require('./is-pending')

function isSettled(value /*: Promise<any> */) {
  return !isPending(value)
}

module.exports = isSettled
