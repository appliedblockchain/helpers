export const isPromise =
  (value: unknown): value is Promise<unknown> => (
    value !== null &&
    typeof value === 'object' &&
    typeof value['then'] === 'function'
  )

export default isPromise
