// @flow

const args = process.argv

function flagOfStringArrayType(name /*: string */, defaultValue /*:: ?: string[] */ = []) /*: string[] */ {
  const result = []
  for (let i = 0; i < args.length; i++) {
    if (args[i] === name) {
      result.push(String(args[i + 1]))
    }
  }
  return result.length ? result : defaultValue
}

module.exports = flagOfStringArrayType
