
const { isSafeInteger } = Number

/** @returns `true` if value is safe unsigned number, `false` otherwise. */
export function isSafeUnsigned(value: any) : boolean {
  return (
    typeof value === 'number' &&
    value >= 0 &&
    isSafeInteger(value)
  )
}

export default isSafeUnsigned;
