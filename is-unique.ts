import { inspect } from 'util'
import defaultCmp from './default-cmp'

export const isUnique =
  <T>(unsortedValues: T[], cmp: (a: T, b: T) => -1 | 0 | 1 = defaultCmp): boolean => {
    if (!Array.isArray(unsortedValues)) {
      throw new TypeError(`Expected array, got ${inspect(unsortedValues)}.`)
    }
    const n = unsortedValues.length
    if (n < 2) {
      return true
    }
    const values = unsortedValues.slice(0).sort(cmp)
    let p = values[0]
    for (let i = 1; i < n; i++) {
      switch (cmp(p, values[i])) {
        case 0:
          return false
        case 1:
          throw new Error(`Unexpected comparision result 1 p ${inspect(p)} xs[i] ${inspect(values[i])} i ${i}.`)
      }
      p = values[i]
    }
    return true
  }

export default isUnique
