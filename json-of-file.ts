import { existsSync, readFileSync } from 'fs'

export const jsonOfFile =
  (path: string): unknown =>
    existsSync(path) ?
      JSON.parse(readFileSync(path, { encoding: 'utf8' })) :
      undefined

export default jsonOfFile
