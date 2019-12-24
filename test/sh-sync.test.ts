// @flow

const sh = require('../sh-sync')

test('shSync', () => {
  expect(sh('whoami').stdout).toEqual(process.env.USER)
})
