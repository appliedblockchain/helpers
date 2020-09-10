// @flow

/*::

export type Severity =
  | 'fatal'
  | 'error'
  | 'warn'

*/

class Err extends Error {

  /*::

  severity: Severity
  code: number | string
  info: void | Object

  */

  constructor(severity /*: Severity */, code /*: number | string */, message /*:: ?: string */, info /*:: ?: Object */) {
    super(message || String(code))
    this.severity = severity
    this.code = code
    this.info = info
  }

}

module.exports = Err
