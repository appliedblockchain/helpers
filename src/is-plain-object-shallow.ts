// @flow

const objectPrototype = Object.getPrototypeOf({})

function isPlainObjectShallow(value /*: mixed */) /*: boolean %checks */ {
  return (
    value !== null &&
    typeof value === 'object' &&
    Object.getPrototypeOf(value) === objectPrototype &&
    Object.prototype.toString.call(value) === '[object Object]'
  )
}

module.exports = isPlainObjectShallow
