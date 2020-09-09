export const isDefined =
  <T>(value: T): value is Exclude<T, undefined> =>
    typeof value !== 'undefined'

export default isDefined
