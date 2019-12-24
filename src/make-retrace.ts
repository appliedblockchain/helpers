// @flow

/** Captures extra stack trace, usage `await foo().catch(makeRetrace())`.
    `err` argument is being modified with new stack value. */
function makeRetrace() {
  const captured = {}
  Error.captureStackTrace(captured, makeRetrace)
  return (err /*: Error */) => {

    // eslint-disable-next-line no-param-reassign
    err.stack = [
      ...err.stack.split('\n'),
      '    ...retrace...',
      ...captured.stack.split('\n').slice(1)
    ].join('\n')
    throw err
  }
}

module.exports = makeRetrace
