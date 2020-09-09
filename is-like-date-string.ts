const re: RegExp = /^20\d\d-(0[1-9]|1[0-2])-(0[1-9]|[12]\d|3[01])$/

/** @returns `true` if `value` looks like `YYYY-MM-DD` date string, `false` otherwise. */
export const isLikeDateString =
  (value: unknown): value is string =>
    (typeof value === 'string' && re.test(value))

export default isLikeDateString
