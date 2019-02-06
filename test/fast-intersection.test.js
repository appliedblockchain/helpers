// @flow

const fastIntersection = require('../fast-intersection')

test('t1', () => {
  expect(fastIntersection([ 'a', 'd', 'f' ], [ 'b', 'c', 'd', 'e', 'f' ])).toEqual([ 'd', 'f' ])
})
