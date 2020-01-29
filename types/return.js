// @flow

/**

  Utility type that extracts return type of a function.

  @usage

    const f = string => number
    const r = $Return<typeof f>
    (r: number)

*/

/*::

export type $Return<F> = $Call<<T>((...Iterable<any>) => T) => T, F>;

*/
