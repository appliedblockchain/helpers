// @flow

const serialQueueOf =
  () => {
    const thunks = []

    const next =
      () => {
        const { thunk, resolve, reject } = thunks[0]
        thunk()
          .then(resolve)
          .catch(reject)
          .finally(() => {
            thunks.shift()
            if (thunks.length) {
              next()
            }
          })
      }

    const push /*: <R>(() => Promise<R>) => Promise<R> */ = /*:: <R> */
      (thunk) =>
        new Promise((resolve, reject) => {
          thunks.push({ thunk, resolve, reject })
          if (thunks.length === 1) {
            next()
          }
        })

    return push
  }

module.exports = serialQueueOf
