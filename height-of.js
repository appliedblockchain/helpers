// @flow

const postJsonRpc = require('./post-json-rpc')
const rejectTimeout = require('./reject-timeout')
const numberOfHex0x = require('./number-of-hex0x')

// Default timeout (1s).
const defaultTiemout = 1 * 1000

/** @returns Height of the chain from provided ethereum jsonrpc endpoint `url` or `NaN` if timeout has been reached or any other problem occured. */
async function heightOf(url /*: string */) /*: Promise<number> */ {

  // TODO: Use built in timeout, otherwise we can create too many connections to failing node.
  return rejectTimeout(postJsonRpc(url, 'eth_blockNumber'), defaultTiemout)
    .then(numberOfHex0x)
    .catch(() => NaN)
}

module.exports = heightOf
