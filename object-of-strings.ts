/** @returns membership object (set) for provided list of elements (strings). */
export const objectOfStrings =
  (strings: string[]): Record<string, void | true> =>
    strings.reduce((r, _) => {
      r[_] = true // eslint-disable-line no-param-reassign
      return r
    }, {})

export default objectOfStrings
