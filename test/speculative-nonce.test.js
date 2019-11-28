// @flow

const SpeculativeNonce = require('../speculative-nonce')
const sleep = require('../sleep')

jest.setTimeout(60 * 1000)

test('speculative nonce', async () => {
  const speculativeNonce = new SpeculativeNonce({
    nonceOfAddress: async () => 7
  })
  await expect(speculativeNonce.next('0xD1E8bAACA71FeBF698fEaA1e2FACdCcC111D8c74')).resolves.toEqual(7)
  await expect(speculativeNonce.next('0xD1E8bAACA71FeBF698fEaA1e2FACdCcC111D8c74')).resolves.toEqual(8)
  await expect(speculativeNonce.next('0xD1E8bAACA71FeBF698fEaA1e2FACdCcC111D8c74')).resolves.toEqual(9)
  await expect(speculativeNonce.next('0x328319440F9FBEedCFFd41cA54A47714ac79BD55')).resolves.toEqual(7)
  await sleep((12 + 1) * 1000)
  await expect(speculativeNonce.next('0xD1E8bAACA71FeBF698fEaA1e2FACdCcC111D8c74')).resolves.toEqual(7)
  await expect(speculativeNonce.next('0x328319440F9FBEedCFFd41cA54A47714ac79BD55')).resolves.toEqual(7)
})
