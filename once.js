// @flow

const errOf = require('./err-of')
const { inspect } = require('util')

function once(
  emitter /*: events$EventEmitter */,
  eventName /*: string */,
  timeout /*: number */
) /*: Promise<mixed> */ {
  return new Promise((resolve, reject) => {
    let timeoutId, listener
    listener = _ => {
      clearTimeout(timeoutId)
      timeoutId = null
      resolve(_)
    }
    timeoutId = setTimeout(() => {
      emitter.off(eventName, listener)
      listener = null
      reject(errOf('timeout', `Timeout of ${inspect(timeout)} reached while waiting for ${inspect(eventName)} event.`))
    }, timeout)
    emitter.once(eventName, listener)
  })
}

module.exports = once
