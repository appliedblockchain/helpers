// @flow

/** Parses string and returns `true` for `"true"`, `"on"`, `"yes"` and `"1"` strings, `false` otherwise. */
function booleanOfString(value /*: string */) /*: boolean */ {
  return (
    value === 'true' ||
    value === 'on' ||
    value === 'yes' ||
    value === '1'
  )
}

module.exports = booleanOfString
