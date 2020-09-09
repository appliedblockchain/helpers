import Err from './err'

export type CancellablePromise<T> = Promise<T> & { cancel: () => void }

/** @returns cancellable, rejecting timeout promise. */
export const timeoutOf = (
  milliseconds: number,
  message: string = `Timeout of ${String(milliseconds)}ms exceeded.`,
  code: number | string = '@appliedblockchain/helpers/timeout'
): CancellablePromise<undefined> => {
  let timeoutId, resolve_
  const promise = new Promise((resolve, reject) => {
    resolve_ = resolve
    timeoutId = setTimeout(() => {
      reject(new Err(code, message, { milliseconds }))
    }, milliseconds)
  }) as CancellablePromise<undefined>
  promise.cancel = () => {
    if (timeoutId) {
      clearTimeout(timeoutId)
      timeoutId = undefined
      resolve_()
    }
  }
  return promise
}

export default timeoutOf
