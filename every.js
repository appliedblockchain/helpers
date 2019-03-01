// @flow

function every/*:: <T> */(iterator /*: Iterator<T> */, predicate /*: T => boolean */) {
  for (const element of iterator) {
    if (!predicate(element)) {
      return false
    }
  }
  return true
}

module.exports = every
