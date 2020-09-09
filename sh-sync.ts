import { execSync } from 'child_process'
import { Writable } from 'stream'

/** Executes simple shell command. */
export const shSync =
  (cmd: string, { trim = true }: { trim?: boolean } = {}): { stderr: string, stdout: string } => {
    const stderrChunks = []
    const stdout = execSync(cmd, {
      stderr: new Writable().on('data', (chunk: string) => stderrChunks.push(chunk)),
      encoding: 'utf8'
    })
    const stderr = stderrChunks.join('')
    return trim ? { stdout: stdout.trim(), stderr: stderr.trim() } : { stdout, stderr }
  }

export default shSync