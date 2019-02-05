// @flow

function isSafeNatural(value /*: number */) /*: boolean */ {
  return value >= 0 && Number.isSafeInteger(value)
}

module.exports = isSafeNatural
