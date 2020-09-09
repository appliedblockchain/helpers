import lineOfBuffer from './line-of-buffer'

export const linesOfBuffer =
  (value: Buffer, offset: number = 0): [string[], number] => {
    const lines = []
    let i = offset
    while (true) {
      const [line, j] = lineOfBuffer(value, i)
      if (!line) {
        break
      }
      lines.push(line)
      i = j
    }
    return [lines, i]
  }

export default linesOfBuffer
