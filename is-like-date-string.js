// @flow

const re = /^20\d\d-(0[1-9]|1[0-2])-(0[1-9]|[12]\d|3[01])$/

/** Checks if `value` looks like `YYYY-MM-DD` date string. */
function isLikeDateString(value /*: mixed */) /*: boolean %checks */ {
  return (
    typeof value === 'string' &&
    re.test(value)
  )
}

module.exports = isLikeDateString
