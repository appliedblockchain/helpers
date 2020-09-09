
const weakMap = new WeakMap<object, unknown>()

export function has(target: object, key: string | symbol): boolean {
  const meta = weakMap.get(target)
  if (!meta) {
    return false
  }
  return typeof meta[key] !== 'undefined'
}

export function get(target: object, key: string | symbol): unknown {
  const meta = weakMap.get(target)
  if (!meta) {
    return void 0
  }
  return meta[key]
}

export function set(target: object, key: string | symbol, value: unknown): void {
  if (!weakMap.has(target)) {
    weakMap.set(target, {})
  }
  const meta = weakMap.get(target)
  if (!meta) {
    throw new TypeError('Expected meta.')
  }
  meta[key] = value
}
