// @flow

const retry = require('../retry')

jest.setTimeout(20 * 1000)

test('retry rejects', async () => {
  await expect(retry(async () => {
    throw new Error('X')
  })).rejects.toThrow('X')
})

test('retry resolves', async () => {
  let i = 2
  const f = async () => {
    if (--i === 0) {
      return 'ok'
    }
    throw new Error()
  }
  await expect(retry(f, 3)).resolves.toEqual('ok')
})
