// @flow

/**

  Utility type that extracts type of promise.

  @usage

    const a: Promise<string>
    const b: $Promised<typeof a>
    (b: string)

*/

/*::

export type $Promised<T> = $Call<<T>(Promise<T>) => T, T>

*/
