// @flow

const weakMap /*: WeakMap<Object, { [string | Symbol]: mixed }> */ = new WeakMap

function has(target /*: Object */, key /*: string | Symbol */) {
  const meta = weakMap.get(target)
  if (!meta) {
    return false
  }
  return typeof meta[key] !== 'undefined'
}

function get(target /*: Object */, key /*: string | Symbol */) {
  const meta = weakMap.get(target)
  if (!meta) {
    return void 0
  }
  return meta[key]
}

function set(target /*: Object */, key /*: string | Symbol */, value /*: mixed */) {
  if (!weakMap.has(target)) {
    weakMap.set(target, {})
  }
  const meta = weakMap.get(target)
  if (!meta) {
    throw new TypeError(`Expected meta.`)
  }
  meta[key] = value
}

module.exports = {
  has,
  get,
  set
}
