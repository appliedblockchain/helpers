// @flow

const sleep = require('./sleep')
const { now } = Date
const { min, max } = Math

/** Retries up to `n` times (roughtly seconds) call to `f` waiting for `true` result, which breaks the loop and returns
    `true`. If `f` didn't return `true` throws last result value.

    @usage
      await expect(eventuallyTrue(async () => { return checkSomething() }).resolves.toBe(true)

*/
async function eventuallyTrue/*:: <R> */(f /*: () => Promise<R> */, n /*: number */ = 30) /*: Promise<true | R> */ {
  let lastResult
  for (let i = 0; i < n; i++) {
    const before = now()
    lastResult = await f()
    if (lastResult === true) {
      return true
    }
    const duration = now() - before
    const delay = max(0, min(1000, 1000 - duration))
    await sleep(delay)
  }
  throw lastResult
}

module.exports = eventuallyTrue
