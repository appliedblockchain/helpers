import kindOfJsonRpc from '../kind-of-json-rpc'

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
    [ { jsonrpc: '2.0', id: null, method: 'foo', params: [] }, 'call' ],
    [ { jsonrpc: '2.0', id: 1, method: 'foo', params: [] }, 'call' ],
    [ { jsonrpc: '2.0', id: '1', method: 'foo', params: [] }, 'call' ],
    [ { jsonrpc: '2.0', id: NaN, method: 'foo', params: [] }, undefined ],
    [ { jsonrpc: '2.0', id: Infinity, method: 'foo', params: [] }, undefined ],
    [ { jsonrpc: '2.0', method: 'foo' }, 'notification' ],
    [ { jsonrpc: '2.0', error: { code: 0, message: '' } }, undefined ],
    [ { jsonrpc: '2.0', id: 1, error: { code: 0, message: '' } }, 'error' ],
    [ { jsonrpc: '2.0', id: 1, result: null }, 'result' ]
  ].forEach(([ value, expected ]) => {
    expect(kindOfJsonRpc(value)).toBe(expected)
  })
})
