import { inspect } from 'util'

export const firstOf =
  <T>(values: T[]): T => {
    if (!Array.isArray(values)) {
      throw new TypeError(`Expected array, got ${inspect(values)}.`)
    }
    if (!values.length) {
      throw new TypeError('Expected non empty array.')
    }
    return values[0]
  }

export default firstOf
