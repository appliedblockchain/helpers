// @flow

const exists /*: (string, args?: string[]) => boolean */ =
  (name, args = process.argv) => {
    for (let i = 0; i < args.length; i++) {
      if (args[i] === name) {
        return true
      }
    }
    return false
  }

module.exports = exists
