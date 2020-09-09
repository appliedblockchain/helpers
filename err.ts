import type NilOr from './types/nil-or'

export class Err extends Error {
  code: number | string
  info: NilOr<Record<string, unknown>>

  constructor(code: number | string, message?: string, info?: Record<string, unknown>) {
    super(message || String(code))
    this.code = code
    this.info = info
  }
}

export default Err
