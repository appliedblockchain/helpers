// @flow

const isSorted = require('../is-sorted')

test('isSorted', () => {

  // $FlowFixMe
  expect(() => isSorted()).toThrow('Expected array, got undefined.')

  expect(isSorted([])).toBe(true)
  expect(isSorted([ 'a' ])).toBe(true)
  expect(isSorted([ 'a', 'b' ])).toBe(true)
  expect(isSorted([ 'b', 'a' ])).toBe(false)
  expect(isSorted([ 'a', 'b', 'c', 'd' ])).toBe(true)
  expect(isSorted([ 'a', 'c', 'b', 'd' ])).toBe(false)
})
