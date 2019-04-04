// @flow

function booleanOfString(value /*: string */) /*: boolean */ {
  return (
    value === 'true' ||
    value === 'on' ||
    value === 'yes' ||
    value === '1'
  )
}

module.exports = booleanOfString
