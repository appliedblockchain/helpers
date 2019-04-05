// @flow

/** Returns `true` if value is safe integer greater than or equal to zero, `false` otherwise. */
function isSafeNonNegative(value /*: number */) /*: boolean */ {
  return value >= 0 && Number.isSafeInteger(value)
}

module.exports = isSafeNonNegative
