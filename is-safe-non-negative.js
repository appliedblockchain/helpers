// @flow

const { isSafeInteger } = Number

/** Returns `true` if value is safe integer greater than or equal to zero, `false` otherwise. */
function isSafeNonNegative(value /*: mixed */) /*: boolean %checks */ {
  return (
    typeof value === 'number' &&
    value >= 0 &&
    isSafeInteger(value)
  )
}

module.exports = isSafeNonNegative
