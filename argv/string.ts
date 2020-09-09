import { inspect } from 'util'

export const string =
  (name: string, default_: undefined | string = undefined, args: string[] = process.argv): string => {
    for (let i = 0; i < args.length - 1; i++) {
      if (args[i] === name) {
        return args[i + 1]
      }
    }
    if (typeof default_ !== 'string') {
      throw new TypeError(`Expected ${inspect(name)} arg.`)
    }
    return default_
  }

export default string
