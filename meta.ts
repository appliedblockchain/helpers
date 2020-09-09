export const weakMap = new WeakMap<Record<string, unknown>, unknown>()

export const has =
  (target: Record<string, unknown>, key: string | symbol): boolean => {
    const meta = weakMap.get(target)
    if (!meta) {
      return false
    }
    return typeof meta[key] !== 'undefined'
  }

export const get =
  (target: Record<string, unknown>, key: string | symbol): unknown => {
    const meta = weakMap.get(target)
    if (!meta) {
      return void 0
    }
    return meta[key]
  }

export const set =
  (target: Record<string, unknown>, key: string | symbol, value: unknown): void => {
    if (!weakMap.has(target)) {
      weakMap.set(target, {})
    }
    const meta = weakMap.get(target)
    if (!meta) {
      throw new TypeError('Expected meta.')
    }
    meta[key] = value
  }

export default {
  weakMap,
  has,
  get,
  set
}
