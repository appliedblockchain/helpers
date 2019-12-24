// @flow

const args = process.argv

function flagOfStringType(name /*: string */, defaultValue /*: string */) {
  for (let i = 0; i < args.length; i++) {
    if (args[i] === name) {
      return args[i + 1]
    }
  }
  return defaultValue
}

module.exports = flagOfStringType
