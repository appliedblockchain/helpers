// @flow

const errOf = require('./err-of')
const resultOfPredicate = require('./result-of-predicate')
const { inspect } = require('util')

function onceIf/*:: <T = any> */(
  emitter /*: events$EventEmitter */,
  eventName /*: string */,
  predicate /*: (value: T) => boolean | Promise<boolean> */,
  timeout /*: number */
) /*: Promise<T> */ {
  return new Promise((resolve, reject) => {
    let timeoutId, listener

    timeoutId = setTimeout(() => {
      if (listener) {
        emitter.off(eventName, listener)
        listener = null
      }
      reject(errOf(
        'timeout', `Timeout of ${inspect(timeout)} reached while waiting for conditional event ${inspect(eventName)}.`
      ))
    }, timeout)

    listener = async (value /*: T */) => {
      if (await resultOfPredicate(predicate, value)) {
        if (listener) {
          emitter.off(eventName, listener)
          listener = null
        }
        if (timeoutId) {
          clearTimeout(timeoutId)
          timeoutId = null
        }
        resolve(value)
      }
    }

    emitter.on(eventName, listener)
  })
}

module.exports = onceIf
