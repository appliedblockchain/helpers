// @flow

const { isArray } = Array

function get(value /*: mixed */, path /*: string | number | (string | number)[] */, defaultValue /*: mixed */) /*: mixed */ {
  const xs /*: any */ = isArray(path) ? path : [ path ]
  let r = value
  for (const x of xs) {
    if (r == null) {
      r = void 0
      break
    }
    r = (r /*: any */)[x]
  }
  return typeof r === 'undefined' ? defaultValue : r
}

module.exports = get
