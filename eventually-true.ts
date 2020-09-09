import sleep from './sleep'

/**
 * Retries up to `n` times (roughtly seconds) call to `f` waiting for `true` result, which breaks the loop and returns
 * `true`. If `f` didn't return `true` throws last result value.
 *
 * @usage
 *    await expect(eventuallyTrue(async () => {
 *      return checkSomething()
 *    }).resolves.toBe(true)
 */
const eventuallyTrue =
  async <T>(f: () => Promise<T | true>, n = 30): Promise<T | true> => {
    let lastResult: T | true
    for (let i = 0; i < n; i++) {
      const before = Date.now()
      lastResult = await f()
      if (lastResult === true) {
        return true
      }
      const duration = Date.now() - before
      const delay = Math.max(0, Math.min(1000, 1000 - duration))
      await sleep(delay)
    }
    throw lastResult
  }

export default eventuallyTrue
