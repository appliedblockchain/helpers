/** @returns input string padded with 0 if length is odd, otherwise returns string as is. */
export const evenZeroPaddedOf =
  (value: string): string =>
    value.length % 2 === 0 ?
      value :
      '0' + value

export default evenZeroPaddedOf
