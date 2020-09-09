export const csvStrings =
  (name: string, args: string[] = process.argv): string[] => {
    for (let i = 0; i < args.length - 1; i++) {
      if (args[i] === name) {
        return args[i + 1].split(/(?<!\\),/).map(_ => _.replace(/\\,/g, ','))
      }
    }
    return []
  }

export default csvStrings
