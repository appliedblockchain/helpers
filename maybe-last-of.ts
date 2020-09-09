export const maybeLastOf =
  <T>(values: T[]): undefined | T =>
    Array.isArray(values) && values.length ?
      values[values.length - 1] :
      undefined

export default maybeLastOf
