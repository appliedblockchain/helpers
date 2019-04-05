// @flow

/** @returns `true` if value is safe integer greater than zero, `false` otherwise. */
function isSafePositive(value /*: number */) /*: boolean */ {
  return value > 0 && Number.isSafeInteger(value)
}

module.exports = isSafePositive
