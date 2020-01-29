// @flow

/**

  Utility type that extracts promised return type of a function.

  @usage

    const f = string => Promise<number>
    const r = $ReturnPromised<typeof f>
    (r: number)

*/

/*::

export type $ReturnPromised<F> = $Call<<T>((...Iterable<any>) => Promise<T>) => T, F>;

*/
