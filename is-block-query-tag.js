// @flow

function isBlockQueryTag(value /*: mixed */) /*: boolean %checks */ {
  return (
    value === 'earliest' ||
    value === 'latest' ||
    value === 'pending'
  )
}

module.exports = isBlockQueryTag
