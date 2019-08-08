// @flow

const errOf = require('./err-of')
const resultOfPredicate = require('./result-of-predicate')
const { inspect } = require('util')

function onceIf(
  emitter /*: events$EventEmitter */,
  eventName /*: string */,
  predicate /*: () => boolean | Promise<boolean> */,
  timeout /*: number */
) /*: Promise<any> */ {
  return new Promise((resolve, reject) => {
    let timeoutId, listener

    timeoutId = setTimeout(() => {
      emitter.off(eventName, listener)
      listener = null
      reject(errOf(
        'timeout', `Timeout of ${inspect(timeout)} reached while waiting for conditional event ${inspect(eventName)}.`
      ))
    }, timeout)

    listener = emitter.on(eventName, async (...args) => {
      if (await resultOfPredicate(predicate, ...args)) {
        emitter.off(eventName, listener)
        listener = null
        clearTimeout(timeoutId)
        timeoutId = null
        resolve(...args)
      }
    })
  })
}

module.exports = onceIf
