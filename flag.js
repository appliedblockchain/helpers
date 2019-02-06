// @flow

const { inspect } = require('util')

const args = process.argv

function boolFlag(name) {
  for (let i = 0; i < args.length; i++) {
    if (args[i] === name) {
      return true
    }
  }
  return false
}

function arrayFlag(name, value) {
  const result = []
  for (let i = 0; i < args.length; i++) {
    if (args[i] === name) {
      result.push(args[i + 1])
    }
  }
  return result.length ? result : value
}

function stringFlag(name) {
  for (let i = 0; i < args.length; i++) {
    if (args[i] === name) {
      return args[i + 1]
    }
  }
  return value
}

function flag(name, value) {
  if (value === false) {
    return boolFlag(name)
  }
  if (typeof value === 'string') {
    return stringFlag(name, value)
  }
  if (Array.isArray(value)) {
    return arrayFlag(value)
  }
  throw new TypeError(`Invalid flag with ${inspect(name)} name and ${inspect(value)} default value.`)
}

module.exports = flag
