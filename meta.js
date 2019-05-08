// @flow

const weakMap = new WeakMap

function get(object /*: mixed */, key /*: string */) {
  return weakMap.has(object) ?
    weakMap.get(object)[key] :
    void 0
}

function set(object /*: mixed */, key /*: string */, value /*: mixed */) {
  if (!weakMap.has(object)) {
    weakMap.set(object, {})
  }
  weakMap.get(object)[key] = value
}

module.exports = {
  get,
  set
}
