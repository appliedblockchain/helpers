// @flow

const string /*: (string, default_?: string, args?: string[]) => string */ =
  (name, default_ = '', args = process.argv) => {
    for (let i = 0; i < args.length - 1; i++) {
      if (args[i] === name) {
        return args[i + 1]
      }
    }
    return default_
  }

module.exports = string
