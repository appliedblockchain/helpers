// @flow

const integerOfString = require('../integer-of-string')

test('integerOfString', () => {
  expect(integerOfString('0b10')).toBe(0b10)
  expect(integerOfString('0xff')).toBe(0xff)
  expect(integerOfString('0o11')).toBe(0o11)
  expect(integerOfString('-0b10')).toBe(-0b10)
  expect(integerOfString('-0xff')).toBe(-0xff)
  expect(integerOfString('-0o11')).toBe(-0o11)
  expect(integerOfString('abc')).toBe(NaN)
})
