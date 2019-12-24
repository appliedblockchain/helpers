// @flow

const get = require('../get')

test('get', () => {
  expect(get(void 0, 'foo')).toBeUndefined()
  expect(get(void 0, 'foo', 'bar')).toEqual('bar')
  expect(get(void 0, [ 'foo', 'bar' ])).toBeUndefined()
  expect(get(void 0, [ 'foo', 'bar' ], 'baz')).toEqual('baz')
  expect(get([ 'a' ], '0')).toEqual('a')
  expect(get([ 'a' ], 0)).toEqual('a')
  expect(get([ {}, { foo: 'bar' } ], [ 1, 'foo' ])).toEqual('bar')
})
