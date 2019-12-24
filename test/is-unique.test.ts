// @flow

const isUnique = require('../is-unique')

test('isUnique', () => {
  expect(isUnique([])).toBe(true)
  expect(isUnique([ 'a' ])).toBe(true)
  expect(isUnique([ 'a', 'b' ])).toBe(true)
  expect(isUnique([ 'a', 'b', 'b', 'c' ])).toBe(false)
  expect(isUnique([ 'c', 'b', 'a', 'b' ])).toBe(false)
})
