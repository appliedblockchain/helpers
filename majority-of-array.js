// @flow

const majorityOfNumber = require('./majority-of-number')

function majorityOfArray/*:: <T> */(xs /*: T[] */, keyOf /*: T => string */) /*: T | void */ {
  const counts = {}
  const majority = majorityOfNumber(xs.length)
  const inc = k => (counts[k] = (counts[k] || 0) + 1) >= majority
  for (const x of xs) {
    if (inc(keyOf(x))) {
      return x
    }
  }
}

module.exports = majorityOfArray
