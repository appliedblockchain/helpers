import stopOfMonitor from '../stop-of-monitor'
import sleep from '../sleep'

jest.setTimeout(15 * 1000)

test('stopOfMonitor', async () => {
  let i = 0
  const stop = stopOfMonitor(async () => {
    await sleep(2 * 1000)
    i++
  })
  await sleep(5 * 1000)
  stop()
  await sleep(5 * 1000)
  expect(i).toEqual(2)
})
