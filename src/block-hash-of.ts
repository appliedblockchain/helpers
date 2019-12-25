import { inspect } from 'util';
import postJsonRpc from './post-json-rpc';
import rejectTimeout from './reject-timeout';
import hex0xOfUnsigned from './hex0x-of-unsigned';
import isSafeNonNegative from './is-safe-non-negative';
import isBlockQueryTag from './is-block-query-tag';

// Default timeout (1s).
const defaultTiemout = 1 * 1000

/**
 * @returns block hash as hex0x string or null from provided ethereum jsonrpc endpoint `url` in specified `timeout`; `null` if timeout has been reached.
 */
export async function blockHashOf(
  url : string ,
  blockNumberOrTag: 'earliest' | 'latest' | 'pending' | number  = 'latest',
  timeout: number = defaultTiemout,
) : Promise<string | null> {
  if (!isSafeNonNegative(blockNumberOrTag) && !isBlockQueryTag(blockNumberOrTag)) {
    throw new TypeError(`Expected safe non-negative block number or 'earliest', 'latest' or 'pending' tag, got ${inspect(blockNumberOrTag)}.`)
  }
  const blockNumberOrTag_ = isSafeNonNegative(blockNumberOrTag)? hex0xOfUnsigned(blockNumberOrTag) : blockNumberOrTag;

  return rejectTimeout(
      postJsonRpc(url, 'eth_getBlockByNumber', blockNumberOrTag_, false),
      timeout
    ).then(
      (block?: { hash: string }) => block ? block.hash : null
    ).catch(() => null)
}

export default blockHashOf;
