import isObject from './is-object'

const keysOf =
  (value: unknown): string[] =>
    isObject(value) ?
      Object.keys(value) :
      []

export default keysOf
