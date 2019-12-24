// @flow

// $FlowFixMe
const { getPromiseDetails, kPending } = process.binding('util')

/** Returns `true` if promise has not settled yet, `false` otherwise. */
function isPending(value /*: Promise<any> */) /*: boolean */ {
  const [ state ] = getPromiseDetails(value)
  return state === kPending
}

module.exports = isPending
