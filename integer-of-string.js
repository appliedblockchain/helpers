// @flow

const isString = require('./is-string')

function integerOfString(value /*: string */) /*: number */ {
  if (!isString(value)) {
    return NaN
  }
  if (value[0] === '-') {
    return -integerOfString(value.slice(1))
  }
  if (value[0] === '0') {
    switch (value[1]) {
      case 'b':
      case 'B':
        return parseInt(value.slice(2), 2)
      case 'o':
      case 'O':
        return parseInt(value.slice(2), 8)
      case 'x':
      case 'X':
        return parseInt(value.slice(2), 16)
    }
  }
  return parseInt(value, 10)
}

module.exports = integerOfString
