import { inspect } from 'util'

export const lastOf =
  <T>(values: T[]): T => {
    if (!Array.isArray(values)) {
      throw new TypeError(`Expected array, got ${inspect(values)}.`)
    }
    if (!values.length) {
      throw new TypeError(`Expected non empty array.`)
    }
    return values[values.length - 1]
  }

export default lastOf
