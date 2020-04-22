// @flow

const sleep = require('./sleep')

const retry /*: <R>(f: () => Promise<R>, retries?: number, delay?: number) => Promise<R> */ =
  async /*:: <R> */(f, retries = 10, delay = 1 * 1000) => {
    for (let i = 1; i <= retries; i++) {
      try {
        return await f()
      } catch (err) {
        if (i === retries) {
          throw err
        }
        await sleep(delay)
      }
    }
  }

module.exports = retry
