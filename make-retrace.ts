/**
 * Captures extra stack trace.
 * `err`'s stack is decorated.
 *
 * @usage
 *   await foo().catch(makeRetrace())
 */
export function makeRetrace(): (error: Error) => void {
  const captured: { stack?: string } = {}
  Error.captureStackTrace(captured, makeRetrace)
  return (err: Error) => {

    // eslint-disable-next-line no-param-reassign
    err.stack = [...err.stack.split('\n'), '    ...retrace...', ...(captured.stack || '').split('\n').slice(1)].join('\n')
    throw err
  }
}

export default makeRetrace
