import logOf from './log-of'

const log = logOf('result-of-predicate')

export const resultOfPredicate =
  async <T = unknown>(predicate: (value: T) => boolean | Promise<boolean>, value: T): Promise<boolean> => {
    try {
      return Promise.resolve(predicate(value)).then(_ => !!_).catch(err => {
        log.warn('Error while trying to evaluate async predicate.', err)
        return false
      })
    } catch (err) {
      log.warn('Error while trying to evaluate sync predicate.', err)
      return false
    }
  }

export default resultOfPredicate