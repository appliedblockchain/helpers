import sortedDifference from '../sorted-difference'

test('sortedDifference', () => {
  expect(sortedDifference([ 'a', 'b', 'c' ], [ 'b', 'd' ])).toEqual([ 'a', 'c' ])
  expect(sortedDifference([ 'a', 'c', 'e', 'g' ], [ 'c', 'g' ])).toEqual([ 'a', 'e' ])
  expect(sortedDifference([ 'a' ], [ 'a', 'b', 'c', 'd' ])).toEqual([])
})
