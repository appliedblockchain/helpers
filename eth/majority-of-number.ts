import { inspect } from 'util'
import isSafePositive from '../is-safe-positive'

function majorityOfNunber(value: number): number {
  if (!isSafePositive(value)) {
    throw new TypeError(`Expected safe, positive integer, got ${inspect(value)}.`)
  }
  return (value >>> 1) + 1
}

export default majorityOfNunber
