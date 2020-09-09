export const multipleStrings =
  (name: string, args: string[] = process.argv): string[] => {
    const result = []
    for (let i = 0; i < args.length - 1; i++) {
      if (args[i] === name) {
        result.push(args[++i])
      }
    }
    return result
  }

export default multipleStrings
