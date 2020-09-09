import racePromises from './race-promises'
import timeoutOf from './timeout-of'

export const rejectTimeout =
  <T>(promise: Promise<T>, milliseconds: number, message = `Timeout of ${String(milliseconds)}ms exceeded.`, code: number | string = '@appliedblockchain/helpers/timeout'): Promise<T> => {
    const timeout = timeoutOf(milliseconds, message, code)
    return racePromises([
      promise.finally(() => {
        setTimeout(() => {
          timeout.cancel()
        }, 0)
      }),
      timeout
    ])
  }

export default rejectTimeout
