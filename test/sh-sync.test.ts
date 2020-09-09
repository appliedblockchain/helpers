import sh from '../sh-sync'

test('shSync', () => {
  expect(sh('whoami').stdout).toEqual(process.env.USER)
})
