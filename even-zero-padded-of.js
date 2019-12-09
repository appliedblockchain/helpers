// @flow

/** @returns input string padded with 0 if length is odd, otherwise returns string as is. */
function evenZeroPaddedOf(value /*: string */) {
  return value.length % 2 === 0 ? value : '0' + value
}

module.exports = evenZeroPaddedOf
