// @flow

const kindOfJsonRpc = require('../kind-of-json-rpc-2.0')

test('kindOfJsonRpc', () => {
  [
    [ undefined, undefined ],
    [ null, undefined ],
    [ 1, undefined ],
    [ [], undefined ],
    [ {}, undefined ],
    [ { jsonrpc: '2.0' }, undefined ],
    [ { jsonrpc: '2.0', id: 1 }, undefined ],
    [ { jsonrpc: '2.0', method: 'foo', params: [] }, 'notification' ],
    [ { jsonrpc: '2.0', id: null, method: 'foo', params: [] }, 'request' ],
    [ { jsonrpc: '2.0', id: 1, method: 'foo', params: [] }, 'request' ],
    [ { jsonrpc: '2.0', id: '1', method: 'foo', params: [] }, 'request' ],
    [ { jsonrpc: '2.0', id: NaN, method: 'foo', params: [] }, undefined ],
    [ { jsonrpc: '2.0', id: Infinity, method: 'foo', params: [] }, undefined ],
    [ { jsonrpc: '2.0', method: 'foo' }, 'notification' ],
    [ { jsonrpc: '2.0', error: { code: 0, message: '' } }, undefined ],
    [ { jsonrpc: '2.0', id: 1, error: { code: 0, message: '' } }, 'error' ],
    [ { jsonrpc: '2.0', id: 1, result: null }, 'response' ]
  ].forEach(([ value, expected ]) => {
    expect(kindOfJsonRpc(value)).toBe(expected)
  })
})
