import type NilOr from './types/nil-or'

/**
 * Similar to `Promise.all` but yields after each promise settlement.
 * Exceptions are captured and results are yielded as `[ err, result, i ]` tuple.
 */
export async function* eachPromise<T>(promises: Promise<T>[]): AsyncGenerator<[NilOr<Error>, NilOr<T>, number], void, void> {
  const results = []

  let oncePushed: NilOr<() => void> = null

  const settled =
    (err: NilOr<Error>, result: NilOr<T>, i: number) => {
      results.push([err, result, i])
      if (oncePushed) {
        oncePushed()
        oncePushed = null
      }
    }

  promises.forEach((promise, i) => promise.then(result => settled(undefined, result, i)).catch(err => settled(err, undefined, i)))

  for (let i = 0; i < promises.length; i++) {
    yield await new Promise(resolve => {
      if (results.length) {
        resolve(results.shift())
      } else {
        oncePushed = () => resolve(results.shift())
      }
    })
  }

}

export default eachPromise
