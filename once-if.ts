import errOf from './err-of'
import resultOfPredicate from './result-of-predicate'
import { inspect } from 'util'
import type { EventEmitter } from 'events'

export function onceIf<T = any>(
  emitter: EventEmitter,
  eventName: string,
  predicate: (value: T) => boolean | Promise<boolean>,
  timeout: number
): Promise<T> {
  return new Promise((resolve, reject) => {
    let listener: (value: T) => Promise<void>

    let timeoutId = setTimeout(() => {
      if (listener) {
        emitter.off(eventName, listener)
        listener = null
      }
      reject(errOf('timeout', `Timeout of ${inspect(timeout)} reached while waiting for conditional event ${inspect(eventName)}.`))
    }, timeout)

    listener = async (value: T) => {
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

export default onceIf