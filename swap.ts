export const swap =
  <T>(values: T[], i: number, j: number): T[] => {
    [ values[i], values[j] ] = [ values[j], values[i] ]
    return values
  }

export default swap
