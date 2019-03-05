// @flow

const fastDifference = require('../fast-difference')

test('fastDifference', () => {
  expect(fastDifference([ 'a', 'b', 'c' ], [ 'b', 'd' ])).toEqual([ 'a', 'c' ])
  expect(fastDifference([ 'a', 'c', 'e', 'g' ], [ 'c', 'g' ])).toEqual([ 'a', 'e' ])
  expect(fastDifference([ 'a' ], [ 'a', 'b', 'c', 'd' ])).toEqual([])
})
