
const weakMap: WeakMap<Object, Record<string, any>> = new WeakMap

export function has(target: object, key: string): boolean {
  const meta = weakMap.get(target)
  if (!meta) {
    return false
  }
  return typeof meta[key] !== 'undefined'
}

export function get(target: object, key: string) {
  const meta = weakMap.get(target)
  if (!meta) {
    return void 0
  }
  return meta[key]
}

export function set(target: object, key: string, value: any) {
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
  has,
  set,
  get,
}
