import defaultCmp from './default-cmp'
import isObject from './is-object'

export const sortedKeys =
  (value: Record<string, unknown>, cmp: (a: string, b: string) => -1 | 0 | 1 = defaultCmp): string[] => {
    const keys = isObject(value) ? Object.keys(value) : []
    keys.sort(cmp)
    return keys
  }

export default sortedKeys
