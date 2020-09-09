import logOf from './log-of'

const log = logOf('web-socket-ready-state')

export const CONNECTING = 0
export const OPEN = 1
export const CLOSING = 2
export const CLOSED = 3

export interface WebSocketInterface {
  readyState: 0 | 1 | 2 | 3
  once(name: string, listener: (...args: any[]) => any): WebSocketInterface
  off(name: string, listener: (...args: any[]) => any): WebSocketInterface
}

export const webSocketReadyState =
  (ws: WebSocketInterface, timeoutAfter = 15 * 1000): Promise<boolean> => {
    const readyState = ws ? ws.readyState : null
    switch (readyState) {

      case CONNECTING: {
        log.debug('CONNECTING')
        return new Promise(resolve => {
          let yes: () => void, no: (reason: string) => void, timeout: NodeJS.Timeout // eslint-disable-line prefer-const
          const off = () => {
            ws.off('open', yes)
            ws.off('error', no)
            ws.off('close', no)
            if (timeout) {
              clearTimeout(timeout)
              timeout = undefined
            }
          }
          yes = () => {
            log.debug('CONNECTING:yes')
            off()
            resolve(true)
          }
          no = (reason: string) => {
            log.debug('CONNECTING:no', reason)
            off()
            resolve(false)
          }
          ws.once('open', yes)
          ws.once('error', no)
          ws.once('close', no)
          timeout = setTimeout(() => {
            no('timeout')

            // Prevent node process from exiting on error without handler.
            const now = new Date().toISOString()
            ws.once('error', (err: Error) => {
              log.info(`Error on ${now} detached ws.`, err)
            })

          }, timeoutAfter)
        })
      }

      case OPEN:
        return Promise.resolve(true)

      case CLOSING:
        return Promise.resolve(false)

      case CLOSED:
        return Promise.resolve(false)

      default:
        return Promise.resolve(false)

    }
  }

export default webSocketReadyState
