// @flow

const postJsonRpc = require('./post-json-rpc')
const rejectTimeout = require('./reject-timeout')
const numberOfHex0x = require('./number-of-hex0x')
const logOf = require('./log-of')

/*::

import type { Block } from './types/block'

*/

const log = logOf('latest-block-of-url')

const defaultIncludeTransactions = false

// Default timeout (1s).
const defaultTiemout = 1 * 1000

async function latestBlockOfUrl(
  url /*: string */,
  includeTransactions /*:: ?: boolean */ = defaultIncludeTransactions,
  timeout /*:: ?: number */ = defaultTiemout
) /*: Promise<?Block> */ {
  return rejectTimeout(postJsonRpc(url, 'eth_getBlockByNumber', 'latest', includeTransactions), timeout)
    .catch((err /*: Error */) => {
      log.debug('Error while trying to get latest block of url', url, err)
      return null
    })
}

module.exports = latestBlockOfUrl
