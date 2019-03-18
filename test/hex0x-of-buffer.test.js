const hex0xOfBuffer = require('../hex0x-of-buffer')

test('hex0xOfBuffer', () => {
  expect(hex0xOfBuffer(Buffer.from('cafe', 'hex'))).toEqual('0xcafe')
})
