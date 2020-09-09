import Err from './err'

export const errOf: (code: number | string, message?: string, info?: Record<string, unknown>) => Err =
  (code, message, info) =>
    new Err(code, message, info)

export default errOf
