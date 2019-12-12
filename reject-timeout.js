// @flow

const racePromises = require('./race-promises')
const timeoutOf = require('./timeout-of')

function rejectTimeout/*:: <T> */(
  promise /*: Promise<T> */,
  milliseconds /*: number */,
  message /*:: ?: string */ = `Timeout of ${String(milliseconds)}ms exceeded.`,
  code /*:: ?: number | string */ = '@appliedblockchain/helpers/timeout'
) /*: Promise<T> */ {
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

module.exports = rejectTimeout
