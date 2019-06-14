// @flow

const sleep = require('../sleep')
const eachPromise = require('../each-promise')

test('eachPromise', async () => {

  const start = Date.now() / 1000
  const timings = []

  const results = []
  for await (const [ err, result, i ] of eachPromise([ sleep(3 * 1000).then(() => 'a'), sleep(1 * 1000).then(() => 'b'), sleep(2 * 1000).then(() => 'c') ])) {
    results.push([ err, result, i ])
    timings.push((Date.now() / 1000) - start)
  }

  expect(results).toEqual([
    [ void 0, 'b', 1 ],
    [ void 0, 'c', 2 ],
    [ void 0, 'a', 0 ]
  ])

  expect(timings[0]).toBeCloseTo(1, 1)
  expect(timings[1]).toBeCloseTo(2, 1)
  expect(timings[2]).toBeCloseTo(3, 1)
})
