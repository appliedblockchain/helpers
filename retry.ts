import sleep from './sleep'

export const retry =
  async <T>(f: () => Promise<T>, retries = 10, delay = 1 * 1000): Promise<T> => {
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

export default retry
