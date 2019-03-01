// @flow

const rejectTimeout = require('../reject-timeout')

test('rejects after timeout', async () => {
  const promise = new Promise(resolve => setTimeout(() => resolve('ok'), 1 * 1000))
  await expect(rejectTimeout(promise, 0.5 * 1000)).rejects.toThrow('Timeout of 500ms exceeded.')
})

test('resolves before timeout', async () => {
  const promise = new Promise(resolve => setTimeout(() => resolve('ok'), 0.5 * 1000))
  expect(await rejectTimeout(promise, 1 * 1000)).toBe('ok')
})
