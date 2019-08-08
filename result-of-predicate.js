// @flow

const logOf = require('./log-of')

/*::

type Predicate = (...args: any[]) => boolean | Promise<boolean>

*/

const log = logOf('result-of-predicate')

async function resultOfPredicate(f /*: Predicate */, ...args /*: any[] */) /*: Promise<boolean> */ {
  try {
    return Promise.resolve(f(...args))
      .then(_ => !!_)
      .catch(err => {
        log.warn('Error while trying to evaluate predicate.', err)
        return false
      })
  } catch (err) {
    log.warn('Error while trying to evaluate predicate.', err)
    return false
  }
}

module.exports = resultOfPredicate
