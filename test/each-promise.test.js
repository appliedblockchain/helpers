// @flow

const sleep = require('../sleep')
const eachPromise = require('../each-promise')

test('eachPromise', async () => {

  const results = []
  for await (const [ err, result, i ] of eachPromise([ sleep(3).then(() => 'a'), sleep(1).then(() => 'b'), sleep(2).then(() => 'c') ])) {
    results.push([ err, result, i ])
  }

  expect(results).toEqual([
    [ void 0, 'b', 1 ],
    [ void 0, 'c', 2 ],
    [ void 0, 'a', 0 ]
  ])

})
