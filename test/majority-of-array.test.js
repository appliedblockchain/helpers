// @flow

const majorityOfArray = require('../majority-of-array')

test('majorityOfArray', () => {
  expect(majorityOfArray([ 'a' ], _ => _)).toEqual('a')
  expect(majorityOfArray([ 'a', 'b' ], _ => _)).toEqual(void 0)
  expect(majorityOfArray([ 'a', 'b', 'b' ], _ => _)).toEqual('b')
  expect(majorityOfArray([ 'a', 'b', 'b', 'a' ], _ => _)).toEqual(void 0)
  expect(majorityOfArray([ 'a', 'b', 'b', 'a', 'b' ], _ => _)).toEqual('b')
})
