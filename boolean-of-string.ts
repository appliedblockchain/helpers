/** @returns `true` for `"true"`, `"on"`, `"yes"` and `"1"` strings, `false` otherwise. */
export const booleanOfString =
  (value: string): boolean => (
    value === 'true' ||
    value === 'on' ||
    value === 'yes' ||
    value === '1'
  )

export default booleanOfString
