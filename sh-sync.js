// @flow

const { execSync } = require('child_process')
const { Writable } = require('stream')

/** Executes simple shell command. */
function shSync(cmd /*: string */, { trim = true } /*: {| trim?: boolean |} */ = {}) {
  const stderrChunks = []
  const stdout = execSync(cmd, {
    stderr: (new Writable()).on('data', (chunk /*: string */) => stderrChunks.push(chunk)),
    encoding: 'utf8'
  })
  const stderr = stderrChunks.join('')
  return trim ?
    { stdout: stdout.trim(), stderr: stderr.trim() } :
    { stdout, stderr }
}

module.exports = shSync
