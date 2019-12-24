// @flow

const ExpirySet = require('../expiry-set')
const sleep = require('../sleep')

test('ExpirySet', async () => {
  const expired = []
  const set = new ExpirySet(1 * 1000, 2)
  set.on('expired', _ => expired.push(_))
  set.add('foo')
  await sleep(1.1 * 1000)
  expect(set.size).toEqual(1)
  set.add('bar')
  expect(set.size).toEqual(2)
  expect(expired).toEqual([])
  await sleep(1.1 * 1000)
  expect(set.size).toEqual(1)
  expect(expired).toEqual([ 'foo' ])
  await sleep(1.1 * 1000)
  expect(set.size).toEqual(0)
  expect(expired).toEqual([ 'foo', 'bar' ])
})
