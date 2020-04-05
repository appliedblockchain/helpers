// @flow

const csvStrings /*: (string, args?: string[]) => string[] */ =
  (name, args = process.argv) => {
    for (let i = 0; i < args.length - 1; i++) {
      if (args[i] === name) {
        return args[i + 1].split(/(?<!\\),/).map(_ => _.replace(/\\,/g, ','))
      }
    }
    return []
  }

module.exports = csvStrings
