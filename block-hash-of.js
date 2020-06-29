// @flow

const { inspect } = require('util')
const postJsonRpc = require('./post-json-rpc')
const rejectTimeout = require('./reject-timeout')
const hex0xOfUnsigned = require('./hex0x-of-unsigned')
const isSafeNonNegative = require('./is-safe-non-negative')
const isBlockQueryTag = require('./is-block-query-tag')

// Default timeout (1s).
const defaultTiemout = 1 * 1000

/**
 * @returns block hash as hex0x string or null from provided ethereum jsonrpc endpoint `url` in specified `timeout`; `null` if timeout has been reached.
 */
async function blockHashOf(
  url /*: string */,
  blockNumberOrTag /*:: ?: 'earliest' | 'latest' | 'pending' | number */ = 'latest',
  timeout /*:: ?: number */ = defaultTiemout
) /*: Promise<?string> */ {
  if (!isSafeNonNegative(blockNumberOrTag) && !isBlockQueryTag(blockNumberOrTag)) {
    throw new TypeError(`Expected safe non-negative block number or 'earliest', 'latest' or 'pending' tag, got ${inspect(blockNumberOrTag)}.`)
  }
  const blockNumberOrTag_ = isSafeNonNegative(blockNumberOrTag) ?
    hex0xOfUnsigned(blockNumberOrTag) :
    blockNumberOrTag
  return rejectTimeout(postJsonRpc(url, 'eth_getBlockByNumber', blockNumberOrTag_, false), timeout)
    .then((block /*: ?{ hash: string, ... } */) => block ? block.hash : null)
    .catch(() => null)
}

module.exports = blockHashOf
