// @flow

const { floor, random } = Math

const shuffle /*: <T>(T[]) => T[] */ = /*:: <T> */
  (xs) => {
    let n = xs.length
    while (n) {
      const i = floor(random() * n--)

      // $FlowFixMe
      ;[ xs[n], xs[i] ] = [ xs[i], xs[n] ]
    }
    return xs
  }

module.exports = shuffle
