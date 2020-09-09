// @flow

import sortedIntersection from '../sorted-intersection'

test('t1', () => {
  expect(sortedIntersection([ 'a', 'd', 'f' ], [ 'b', 'c', 'd', 'e', 'f' ])).toEqual([ 'd', 'f' ])
})
