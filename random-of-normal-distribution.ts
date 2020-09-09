const { EPSILON: epsilon } = Number
const { random, sqrt, PI: pi, log, sin, cos } = Math
const tau = pi * 2

let flip = false
let z1 = 0

/** @returns normally distributed random number(s) with `mean` and `standardDeviation`. */
export const randomOfNormalDistribution =
  (mean = 0, standardDeviation = 1): number => {
    if (!(flip = !flip)) {
      return z1 * standardDeviation + mean
    }
    let u1
    do {
      u1 = random()
    } while (u1 <= epsilon)
    const u2 = random()
    const z0 = sqrt(-2.0 * log(u1)) * cos(tau * u2)
    z1 = sqrt(-2.0 * log(u1)) * sin(tau * u2)
    return z0 * standardDeviation + mean
  }

export default randomOfNormalDistribution