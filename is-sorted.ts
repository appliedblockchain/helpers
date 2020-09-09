import { inspect } from 'util'
import defaultCmp from './default-cmp'

export function isSorted<T>(values: T[], cmp: (a: T, b: T) => -1 | 0 | 1 = defaultCmp): boolean {
  if (!Array.isArray(values)) {
    throw new TypeError(`Expected array, got ${inspect(values)}.`)
  }
  const n = values.length
  if (n < 2) {
    return true
  }
  let p = values[0]
  for (let i = 1; i < n; i++) {
    if (cmp(p, values[i]) === 1) {
      return false
    }
    p = values[i]
  }
  return true
}

export default isSorted
