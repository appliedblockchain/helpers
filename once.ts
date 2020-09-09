import { inspect } from 'util'
import errOf from './err-of'
import type { EventEmitter } from 'events'

export const once =
  <T = unknown>(emitter: EventEmitter, eventName: string, timeout: number): Promise<T> => {
    return new Promise((resolve, reject) => {
      let timeoutId: NodeJS.Timeout
      let listener: (event: T) => void
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

export default once
