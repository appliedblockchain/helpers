export const isNil =
  (value: unknown): value is undefined | null =>
    value == null

export default isNil
