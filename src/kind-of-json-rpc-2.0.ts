// @flow

const isDefined = require('./is-defined')
const isFinite = require('./is-finite')
const isNull = require('./is-null')
const isPlainObject = require('./is-plain-object-shallow')
const isString = require('./is-string')
const isUndefined = require('./is-undefined')

function kindOfJsonRpc(value /*: mixed */) /*: 'request' | 'response' | 'error' | 'notification' | void */ {

  if (!isPlainObject(value) || value.jsonrpc !== '2.0') {
    return
  }

  const id = isNull(value.id) || isString(value.id) || isFinite(value.id)
  const method = isString(value.method)
  const result = isDefined(value.result)
  const error = isDefined(value.error)

  if (method && !result && !error) {
    return id ?
      'request' :
      isUndefined(value.id) ?
        'notification' :
        void 0
  }

  if (id && !method) {
    return result ?
      (!error ? 'response' : void 0) :
      (error ? 'error' : void 0)
  }
}

module.exports = kindOfJsonRpc
