import isObject from './is-object'

/** @returns `true` if `value` has one or more keys, `false` otherwise. */
export const hasKeys =
  (value: object): boolean => {
    if (!isObject(value)) {
      return false
    }
    for (const k in value) {
      return true
    }
    return false
  }

export default hasKeys
