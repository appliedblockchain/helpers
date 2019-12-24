// @flow

const { isSafeInteger } = Number

function isUint32(value /*: number */) {
  return isSafeInteger(value) && value >= 0 && value <= 0xffffffff
}

module.exports = isUint32
