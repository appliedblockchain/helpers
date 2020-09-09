import mapPath from '../map-path'

test('map', () => {
  expect(mapPath([ { foo: 1 }, null, { foo: { bar: 2 } } ], [ 'foo', 'bar' ])).toEqual([ void 0, void 0, 2 ])
})
