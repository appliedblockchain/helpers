// @flow

const multipleStrings /*: (string, string[]) => string[] */ =
  (name, args = process.argv) => {
    const result = []
    for (let i = 0; i < args.length - 1; i++) {
      if (args[i] === name) {
        result.push(args[++i])
      }
    }
    return result
  }

module.exports = multipleStrings
