/** @returns `true` if value is safe integer greater than zero, `false` otherwise. */
export const isSafePositive =
  (value: unknown): value is number => (
    Number.isSafeInteger(value) &&
    value > 0
  )

export default isSafePositive
