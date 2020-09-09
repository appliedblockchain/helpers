export const number =
  (name: string, default_: number = 0, args: string[] = process.argv): number => {
    for (let i = 0; i < args.length - 1; i++) {
      if (args[i] === name) {
        return parseFloat(args[i + 1])
      }
    }
    return default_
  }

export default number
