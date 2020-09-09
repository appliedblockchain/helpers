export const isUint32 =
  (value: number): boolean =>
    Number.isSafeInteger(value) && value >= 0 && value <= 0xffffffff

export default isUint32
