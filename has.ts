export const has =
  (object: object, key: string | symbol) =>
    object != null &&
    Object.prototype.hasOwnProperty.call(object, key)

export default has
