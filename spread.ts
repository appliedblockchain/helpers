import { inspect } from 'util'
import isSafePositive from './is-safe-positive'

/** Spread `n` calls to `f` function `ms` milliseconds apart. */
export async function spread<T>(n: number, ms: number, f: () => Promise<T>): Promise<T[]> {
  if (!isSafePositive(n) || n > 1024) {
    throw new TypeError(`Expected n to be integer in <1..1024> range, got ${inspect(n)}.`)
  }
  return Promise.all(Array.from(new Array(n)).map((_, i) => new Promise((resolve, reject) => {
    setTimeout(() => {
      try {
        resolve(f())
      } catch (err) {
        reject(err)
      }
    }, i * ms)
  })))
}

export default spread
