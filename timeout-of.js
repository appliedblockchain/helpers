// @flow

const errOf = require('./err-of')

/** @returns cancellable, rejecting timeout promise. */
function timeoutOf(
  milliseconds /*: number */,
  message /*:: ?: string */ = `Timeout of ${String(milliseconds)}ms exceeded.`,
  code /*:: ?: number | string */ = '@appliedblockchain/helpers/timeout'
) /*: Promise<any> & { cancel: Function, ... } */ {
  let timeoutId
  let resolve_
  const promise /*: Promise<any> & { cancel?: Function, ... } */ = new Promise((resolve, reject) => {
    resolve_ = resolve
    timeoutId = setTimeout(
      () => {
        reject(errOf(code, message, { milliseconds }))
      },
      milliseconds
    )
  })
  promise.cancel = () => {
    if (timeoutId) {
      clearTimeout(timeoutId)
      timeoutId = undefined
      resolve_()
    }
  }
  return promise
}

module.exports = timeoutOf
