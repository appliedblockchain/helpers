export const isFinite =
  (value: unknown): value is number =>
    typeof value === 'number' && Number.isFinite(value)

export default isFinite
