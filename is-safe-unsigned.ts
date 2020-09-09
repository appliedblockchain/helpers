/** @returns `true` if value is safe unsigned number, `false` otherwise. */
export const isSafeUnsigned =
  (value: unknown): value is number => (
    typeof value === 'number' &&
    value >= 0 && Number.isSafeInteger(value)
  )

export default isSafeUnsigned
