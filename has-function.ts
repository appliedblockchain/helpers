/** @returns `true` if provided object has `name` function, `false` otherwise. */
export const hasFunction =
  <T extends object, K extends keyof T>(value: T, key: K): value is T & { [key: K]: Function } => (
    value != null &&
    typeof value[key] === 'function'
  )

export default hasFunction;