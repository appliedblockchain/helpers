import majorityOfNumber from './majority-of-number'

const defaultKeyOf =
  (value: unknown) =>
    String(value)

export const majorityOfArray =
  <T>(values: T[], keyOf: (value: T) => string = defaultKeyOf): T | void => {
    const counts = {}
    const majority = majorityOfNumber(values.length)
    const inc =
      (key: string) =>
        (counts[key] = (counts[key] || 0) + 1) >= majority
    for (const value of values) {
      if (inc(keyOf(value))) {
        return value
      }
    }
  }

export default majorityOfArray
