// @flow

const number /*: (string, default_?: number, args?: string[]) => number */ =
  (name, default_ = 0, args = process.argv) => {
    for (let i = 0; i < args.length - 1; i++) {
      if (args[i] === name) {
        return parseFloat(args[i + 1])
      }
    }
    return default_
  }

module.exports = number
