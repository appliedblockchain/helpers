export type Thunk<T> = () => Promise<T>
export type Push<T> = (thunk: Thunk<T>) => Promise<T>

export const serialQueueOf =
  <T>(): Push<T> => {
    const thunks = []

    const next =
      () => {
        const { thunk, resolve, reject } = thunks[0]
        thunk().then(resolve).catch(reject).finally(() => {
          thunks.shift()
          if (thunks.length) {
            next()
          }
        })
      }

    const push =
      (thunk: Thunk<T>) =>
        new Promise<T>((resolve, reject) => {
          thunks.push({ thunk, resolve, reject })
          if (thunks.length === 1) {
            next()
          }
        })

    return push
  }

export default serialQueueOf
