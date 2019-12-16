// @flow

const defaultMax = Number.MAX_SAFE_INTEGER

/** Yields fibonacci sequence capped to `max` (default max safe integer). */
function *fibonacciOf(max /*:: ?: number */ = defaultMax) /*: Generator<number, void, void> */ {
  for (let a = 0, b = 1; a < max; [ a, b ] = [ b, a + b ]) {
    yield a
  }
  while (true) {
    yield max
  }
}

module.exports = fibonacciOf
