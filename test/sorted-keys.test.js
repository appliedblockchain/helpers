// @flow

const sortedKeys = require('../sorted-keys')

test('sortedKeys', () => {
  expect(sortedKeys({ b: 1, a: 1 })).toEqual([ 'a', 'b' ])
})
