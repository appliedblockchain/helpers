// @flow

const lineOfBuffer = require('./line-of-buffer')

function linesOfBuffer(value /*: Buffer */, offset /*:: ?: number */ = 0) {
  const lines = []
  let i = offset
  while (true) {
    const [ line, j ] = lineOfBuffer(value, i)
    if (!line) {
      break
    }
    lines.push(line)
    i = j
  }
  return [ lines, i ]
}

module.exports = linesOfBuffer
