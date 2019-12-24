// @flow

class Err extends Error {

  /*::

  code: number | string
  info: void | Object

  */

  constructor(code /*: number | string */, message /*:: ?: string */, info /*:: ?: Object */) {
    super(message || String(code))
    this.code = code
    this.info = info
  }

}

module.exports = Err
