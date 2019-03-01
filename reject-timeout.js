// @flow

const Err = require('./err')

function rejectTimeout/*:: <T> */(promise /*: Promise<T> */, milliseconds /*: number */) /*: Promise<T> */ {
  let timeoutId
  return Promise.race([
    promise.finally(() => clearTimeout(timeoutId)),
    new Promise((resolve, reject) => {
      timeoutId = setTimeout(
        () => {
          reject(new Err(
            '@appliedblockchain/helpers/timeout',
            `Timeout of ${String(milliseconds)}ms exceeded.`,
            { milliseconds }
          ))
        },
        milliseconds
      )
    })
  ])
}

module.exports = rejectTimeout
