const kindOfJsonRpc =
  (msg: unknown): null | 'call' | 'result' | 'error' | 'notification' => {

    if (typeof msg !== 'object' || msg === null) {
      return null
    }

    if (msg['jsonrpc'] !== '2.0') {
      return null
    }

    const id = typeof msg['id'] !== 'undefined'
    const method = typeof msg['method'] !== 'undefined'
    const params = typeof msg['params'] !== 'undefined'
    const result = typeof msg['result'] !== 'undefined'
    const error = typeof msg['error'] !== 'undefined'

    if (id && method && params && !result && !error) {
      return 'call'
    }

    if (id && !method && !params && result && !error) {
      return 'result'
    }

    if (id && !method && !params && !result && error) {
      return 'error'
    }

    if (!id && method && params && !result && !error) {
      return 'notification'
    }

    return null
  }

export default kindOfJsonRpc
