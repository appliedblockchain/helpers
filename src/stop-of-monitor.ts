// @flow

/** Creates monitor similar to `setInterval` but allows single execution at a time only. Concurrent invocation attempts
    are ignored.
    @returns stop function. */
function stopOfMonitor(f /*: () => Promise<any> */, milliseconds /*:: ?: number */ = 1 * 1000) {
  let lock = false
  const intervalId = setInterval(() => {
    if (!lock) {
      lock = true
      f().finally(() => {
        lock = false
      })
    }
  }, milliseconds)
  return () => {
    clearInterval(intervalId)
  }
}

module.exports = stopOfMonitor
