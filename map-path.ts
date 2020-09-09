import get from './get'
import mapValues from './map-values'

// TODO: types
export const mapPath =
  (value: any, path: any, defaultValue: unknown) =>
    mapValues(value, (_: any) => get(_, path, defaultValue))

export default mapPath
