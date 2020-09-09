import logOf from './log-of'

const log = logOf('catch-of')

/** @usage const count = await getCount().catch(catchOf('Unable to get get count, will default to 0.', 0)) */
export const catchOf =
  <T>(message: string, result: T) =>
    (err: Error): T => {
      log.warn(err, message)
      return result
    }

export default catchOf
