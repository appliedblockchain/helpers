// @flow

const logOf = require('./log-of')

const log = logOf('result-of-predicate')

async function resultOfPredicate/*:: <T = any> */(
  predicate /*: (value: T) => boolean | Promise<boolean> */,
  value /*: T */
) /*: Promise<boolean> */ {
  try {
    return Promise.resolve(predicate(value))
      .then(_ => !!_)
      .catch(err => {
        log.warn('Error while trying to evaluate async predicate.', err)
        return false
      })
  } catch (err) {
    log.warn('Error while trying to evaluate sync predicate.', err)
    return false
  }
}

module.exports = resultOfPredicate
