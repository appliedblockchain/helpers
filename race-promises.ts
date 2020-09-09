/** Like `Promise.race` but doen't complain about unhandled rejections that happen after race has settled. */
// TODO: Fix type here
export const racePromises =
  <T extends Promise<unknown>[]>(promises: T): Promise<keyof T> =>
    Promise
      .race(promises.map(promise => promise.then(result => [ null, result ])
      .catch(err => [ err, null ])))
      .then(([ err, result ]) => {
        if (err) {
          throw err
        }
        return result
      })

export default racePromises
