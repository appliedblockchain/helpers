import postJsonRpc from './post-json-rpc'
import rejectTimeout from './reject-timeout'
import numberOfHex0x from './number-of-hex0x'

// Default timeout (1s).
const defaultTiemout = 1 * 1000

/** @returns Height of the chain from provided ethereum jsonrpc endpoint `url` or `NaN` if timeout has been reached or any other problem occured. */
export const heightOf =
  (url: string, timeout = defaultTiemout): Promise<number> =>

    // TODO: Use built in timeout, otherwise we can create too many connections to failing node.
    rejectTimeout(postJsonRpc(url, 'eth_blockNumber'), timeout)
      .then(numberOfHex0x).catch(() => NaN)

export default heightOf
