// @flow

/** Captures extra stack trace, usage `await foo().catch(makeRetrace())`. */
function makeRetrace() {
  const captured = {}
  Error.captureStackTrace(captured, makeRetrace)
  return (err /*: Error */) => {
    err.stack = [
      ...err.stack.split('\n'),
      '    ...retrace...',
      ...captured.stack.split('\n').slice(1)
    ].join('\n')
    throw err
  }
}

module.exports = makeRetrace
