

import postJsonRpc from './post-json-rpc'
import rejectTimeout from './reject-timeout'
import logOf from './log-of'



import { Block } from "./types/block"



const log = logOf('latest-block-of-url')

const defaultIncludeTransactions = false

// Default timeout (1s).
const defaultTiemout = 1 * 1000

async function latestBlockOfUrl(url: string, includeTransactions: boolean = defaultIncludeTransactions, timeout: number = defaultTiemout): Promise<Block | null | undefined> {
  return rejectTimeout(postJsonRpc(url, 'eth_getBlockByNumber', 'latest', includeTransactions), timeout).catch((err: Error) => {
    log.debug('Error while trying to get latest block of url', url, err)
    return null
  })
}

export default latestBlockOfUrl;