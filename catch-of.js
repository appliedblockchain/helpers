// @flow

const logOf = require('./log-of')

const log = logOf('catch-of')

/** @usage const count = await getCount().catch(catchOf('Unable to get get count, will default to 0.', 0)) */
function catchOf/*:: <T> */(message /*: string */, result /*: T */) /*: (error: Error) => T */ {
  return (err /*: Error */) => {
    log.warn(err, message)
    return result
  }
}

module.exports = catchOf
