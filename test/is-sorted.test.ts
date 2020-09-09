import isSorted from '../is-sorted'

test('isSorted', () => {
  expect(() => isSorted(undefined as any)).toThrow('Expected array, got undefined.')
  expect(isSorted([])).toBe(true)
  expect(isSorted([ 'a' ])).toBe(true)
  expect(isSorted([ 'a', 'b' ])).toBe(true)
  expect(isSorted([ 'b', 'a' ])).toBe(false)
  expect(isSorted([ 'a', 'b', 'c', 'd' ])).toBe(true)
  expect(isSorted([ 'a', 'c', 'b', 'd' ])).toBe(false)
})
