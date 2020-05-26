// @flow

const serialQueueOf = require('../serial-queue-of')
const sleep = require('../sleep')
const q = serialQueueOf()

test('serialQueueOf simple', async () => {
  const r = []
  const f = _ => q(async () => {
    await sleep(_ * 1000)
    r.push(_)
    return _
  })
  const a = await f(0.4)
  a
  f(0.5)
  f(0.1)
  f(0.3)
  f(0.2)
  await q(() => Promise.resolve())
  expect(r).toEqual([
    0.4,
    0.5,
    0.1,
    0.3,
    0.2
  ])
})

test('serialQueueOf simple 2', async () => {
  let s = 0
  const f =
    () =>
      q(async () => {
        if (s++ !== 0) {
          throw new Error(':(')
        }
        await sleep((Math.random() + 0.5) * 100)
        if (--s !== 0) {
          throw new Error(':(')
        }
      })
  await Promise.all(Array.from(Array(10), () => f()))
})
