

const mapArrayValues =
  <T, R>(values: T[], mapping: (value: T, index: number, array: T[]) => R): R[] =>
    values.map(mapping)

const mapObjectValues =
  (object, mapping) =>
    Object.entries(object).reduce(r, ([ k, v ]) => {

      // eslint-disable-next-line no-param-reassign
      r[k] = f(v, k, value)
      return r
    }, {})
  <T extends object>(object: T, mapping: (value: T, index: string, object: object) => K extends keyof T ? Record<string, T[K]> : never)

export const mapValues =
  (value, mapping) =>
    Array.isArray(value) ?
      mapArrayValues(value, mapping) :
      mapObjectValues(value, mapping)

function mapValues<T extends unknown[] | {
  [key: string]: unknown
}>(value: T, f: (arg0: unknown, arg1: unknown, arg2: T) => unknown): T {
  return isArray(value) ? (value as any).map(f) : (entries((value as any)).reduce((r, [k, v]) => {

    // eslint-disable-next-line no-param-reassign
    r[k] = f(v, k, value)
    return r
  }, {}) as any)
}

export default mapValues;