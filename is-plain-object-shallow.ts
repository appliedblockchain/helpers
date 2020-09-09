const objectPrototype = Object.getPrototypeOf({})

export const isPlainObjectShallow =
  (value: unknown): value is object => (
    value !== null &&
    typeof value === 'object' &&
    Object.getPrototypeOf(value) === objectPrototype &&
    Object.prototype.toString.call(value) === '[object Object]'
  )

export default isPlainObjectShallow
