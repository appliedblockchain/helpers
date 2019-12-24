// @flow

const args = process.argv

/**
 * Returns boolean value of command line argument.
 *
 * @example
 * const flagOfBoolean = require('@appliedblockchain/helpers/flag-of-boolean')
 * console.log(flagOfBoolean('--bar'))
 * // node foo.js
 * // false
 * // node foo.js --bar
 * // true
 */
function flagOfBoolean(name /*: string */) {
  for (let i = 0; i < args.length; i++) {
    if (args[i] === name) {
      return true
    }
  }
  return false
}

module.exports = flagOfBoolean
