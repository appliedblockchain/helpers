
/** @yields fibonacci sequence capped to `max` (default max safe integer). */
export const fibonacciOf =
  function* (max = Number.MAX_SAFE_INTEGER) {
    for (let a = 0, b = 1; a < max; [a, b] = [b, a + b]) {
      yield a
    }
    while (true) {
      yield max
    }
  }

export default fibonacciOf
