// @flow

class Err extends Error {

  /*::

  code: string
  info: Object

  */

  constructor(code /*: string */, message /*:: ?: string */, info /*:: ?: Object */) {
    super(message || code)
    this.code = code
    this.info = info
  }

}

module.exports = Err
