// @flow

const assert = require('assert')
const { inspect } = require('util')
const rejectTimeout = require('./reject-timeout')
const Err = require('./err')
const logOf = require('./log-of')

/*::

type Executor = {|
  resolve: (nonce: number) => void,
  reject: (err: Error) => void
|}

*/

const log = logOf('helpers:speculative-nonce')

/** Expire cached nonces after 1 minute. */
const defaultTimeout = 60 * 1000

class SpeculativeNonce {

  /*::

  nonceOfAddress: string => Promise<number>
  nonces: Map<string, number>
  executors: Map<string, Executor[]>
  timeoutIds: Set<TimeoutID>

  */

  constructor(
    { nonceOfAddress } /*: {|
      nonceOfAddress: string => Promise<number>
    |} */
  ) {

    // Wrap in timeout.
    this.nonceOfAddress = (address /*: string */) => {
      return rejectTimeout(nonceOfAddress(address), defaultTimeout - 1000)
    }

    this.nonces = new Map
    this.executors = new Map
    this.timeoutIds = new Set
  }

  next(address /*: string */) /*: Promise<number> */ {

    // If there's nonce available, use sync code path to retrieve it.
    const nonce = this.nonces.get(address)
    if (typeof nonce === 'number') {
      this.nonces.set(address, nonce + 1)
      return Promise.resolve(nonce)
    }

    // Otherwise register promise to be resolved later.
    return new Promise((resolve, reject) => this.addExecutor(address, { resolve, reject }))
  }

  addExecutor(address /*: string */, executor /*: Executor */) {
    const { nonceOfAddress } = this
    const executors = this.executors.get(address)
    if (executors) {
      executors.push(executor)
    } else {
      this.executors.set(address, [ executor ])
      nonceOfAddress(address)
        .then(nonce => this.resolveNonce(address, nonce))
        .catch(err => this.rejectNonce(address, err))
    }
  }

  resolveNonce(address /*: string */, nonce /*: number */) {
    assert(!this.nonces.has(address), `Expected nonce for ${inspect(address)} to be undefined.`)
    const executors = this.executors.get(address)
    if (!executors) {
      throw new Error(`Expected executors for ${inspect(address)} address.`)
    }
    for (const { resolve } of executors) {
      resolve(nonce++)
    }
    this.executors.delete(address)
    this.nonces.set(address, nonce)

    // Expire this nonce.
    const timeoutId = setTimeout(() => {
      if (!this.timeoutIds.has(timeoutId)) {
        log.error('Expected timeout id to be in set.', { timeoutId, timeoutIds: this.timeoutIds })
      }
      if (this.executors.has(address)) {
        log.error('Expected no in-flight executors on timeout.', { address })
      }
      this.timeoutIds.delete(timeoutId)
      this.nonces.delete(address)
    }, defaultTimeout)

    // TODO: Get rid of this, there's performance penalty for abusing unrefs.
    // timeoutId.unref()

    this.timeoutIds.add(timeoutId)
  }

  rejectNonce(address /*: string */, err /*: Error */) {
    const executors = this.executors.get(address)
    if (!executors) {
      return
      // throw new Error(`Expected executors for ${inspect(address)} address.`)
    }
    for (const { reject } of executors) {
      reject(err)
    }
    this.executors.delete(address)
  }

  close(err /*: Error */ = new Err('@appliedblockchain/helpers/speculative-nonce/close', 'Speculative nonce close has been called.')) {

    // Clear all expiry timeouts.
    for (const timeoutId of this.timeoutIds) {
      clearTimeout(timeoutId)
    }
    this.timeoutIds.clear()

    // Reject all promises.
    for (const executors of this.executors.values()) {
      for (const { reject } of executors) {
        reject(err)
      }
    }
  }

}

module.exports = SpeculativeNonce
