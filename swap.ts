export const swap =
  <T>(values: T[], i: number, j: number): T[] => {
    [ values[i], values[j] ] = [ values[j], values[i] ] // eslint-disable-line no-param-reassign
    return values
  }

export default swap
