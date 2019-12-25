import Err from './err';

/** @returns cancellable, rejecting timeout promise. */
export function timeoutOf(
  milliseconds: number,
  message: string = `Timeout of ${String(milliseconds)}ms exceeded.`,
  code: number | string  = '@appliedblockchain/helpers/timeout'
) : Promise<any> & { cancel: Function } {
  let timeoutId: any;
  let resolve_: Function;
  // @ts-ignore
  const promise: Promise<any> & { cancel: Function }  = new Promise((resolve, reject) => {
    resolve_ = resolve
    timeoutId = setTimeout(
      () => {
        reject(new Err(code, message, { milliseconds }))
      },
      milliseconds
    )
  });
  promise.cancel = () => {
    if (timeoutId) {
      clearTimeout(timeoutId)
      timeoutId = undefined
      resolve_()
    }
  }
  return promise
}

export default timeoutOf;
