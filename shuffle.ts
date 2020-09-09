import swap from './swap'

export const shuffle =
  <T>(values: T[]): T[] => {
    let n = values.length
    while (n) {
      const i = Math.floor(Math.random() * n--)
      swap(values, i, n)
    }
    return values
  }

export default shuffle
