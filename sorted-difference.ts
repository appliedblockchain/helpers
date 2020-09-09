import { inspect } from 'util'
import defaultCmp from './default-cmp'

/**
 * Computes xs - ys difference in linear time between two, unique, ascending arrays of values.
 * Comparision function can be flipped for descending arrays.
 * Leaks values of arrays in thrown error.
 */
export const sortedDifference =
  <T>(xs: T[], ys: T[], cmp: (a: T, b: T) => -1 | 0 | 1 = defaultCmp): T[] => {
    const rs = []
    const xn = xs.length
    const yn = ys.length
    let xi = 0
    let yi = 0
    while (xi < xn && yi < yn) {
      const x = xs[xi]
      const y = ys[yi]
      const c = cmp(x, y)
      switch (c) {

        case 0:
          xi++
          yi++
          break

        case -1:
          rs.push(x)
          xi++
          break

        case 1:
          yi++
          break

        default:
          throw new TypeError(`Unexpected cmp result ${inspect(c)} for ${inspect(x)} and ${inspect(y)} values.`)
      }
    }
    while (xi < xn) {
      rs.push(xs[xi++])
    }
    return rs
  }

export default sortedDifference
