// @flow

const args = process.argv

function flagOfNumberType(name /*: string */, defaultValue /*:: ?: ?number */ = null) /*: ?number */ {
  for (let i = 0; i < args.length; i++) {
    if (args[i] === name) {
      return parseFloat(args[i + 1])
    }
  }
  return defaultValue
}

module.exports = flagOfNumberType
