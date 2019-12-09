// @flow

const { isSafeInteger } = Number

/** @returns `true` if value is safe unsigned number, `false` otherwise. */
function isSafeUnsigned(value /*: mixed */) /*: boolean %checks */ {
  return (
    typeof value === 'number' &&
    value >= 0 &&
    isSafeInteger(value)
  )
}

module.exports = isSafeUnsigned
