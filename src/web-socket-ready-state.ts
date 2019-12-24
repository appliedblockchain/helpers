// @flow

const CONNECTING = 0
const OPEN = 1
const CLOSING = 2
const CLOSED = 3

/*::

interface WebSocketInterface {
  readyState: 0 | 1 | 2 | 3;
  once(name: string, listener: Function): any;
  off(name: string, listener: Function): any;
}

*/

async function webSocketReadyState(ws /*: WebSocketInterface */) /*: Promise<boolean> */ {
  const readyState = ws ? ws.readyState : null
  switch (readyState) {

    case CONNECTING: {
      return new Promise(resolve => {
        let yes, no // eslint-disable-line prefer-const
        const off = () => {
          ws.off('open', yes)
          ws.off('error', no)
          ws.off('close', no)
        }
        yes = () => {
          off()
          resolve(true)
        }
        no = () => {
          off()
          resolve(false)
        }
        ws.once('open', yes)
        ws.once('error', no)
        ws.once('close', no)
      })
    }

    case OPEN:
      return true

    case CLOSING:
      return false

    case CLOSED:
      return false

    default:
      return false
  }
}

module.exports = webSocketReadyState
