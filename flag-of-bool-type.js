// @flow

const args = process.argv

function flagOfBoolType(name /*: string */) {
  for (let i = 0; i < args.length; i++) {
    if (args[i] === name) {
      return true
    }
  }
  return false
}

module.exports = flagOfBoolType
