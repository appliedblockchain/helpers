// @flow

// $FlowFixMe
const { scrypt } = require('crypto')

/*::

type R = (
  password: string | Buffer | DataView,
  salt: string | Buffer | DataView,
  keylen: number,
  options: {|
    cost?: number, // Default 16384.
    blockSize?: number, // Default 8.
    parallelization?: number, // Default 1.
    N?: number, // Alias of `cost`.
    r?: number, // Alias of `blockSize`.
    p?: number, // Alias of `parallelization`.
    maxmem?: number, // Default 32 * 1024 * 1024.
  |},
  callback: (err: ?Error, derivedKey: ?Buffer) => void
) => void

*/

module.exports = (scrypt /*: R */)
