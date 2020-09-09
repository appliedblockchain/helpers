type StopFunction = () => void

/**
 * Creates monitor similar to `setInterval` but allows single execution at a time only.
 * Concurrent invocation attempts are ignored.
 * @returns stop function.
 */
export const stopOfMonitor =
  (f: () => Promise<unknown>, milliseconds = 1 * 1000): StopFunction => {
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

export default stopOfMonitor
