/** @returns `true` if predicate passes on all interator elements, `false` otherwise. */
export const every =
  <T>(values: Iterable<T>, predicate: (value: T) => boolean): boolean => {
    for (const value of values) {
      if (!predicate(value)) {
        return false
      }
    }
    return true
  }

export default every
