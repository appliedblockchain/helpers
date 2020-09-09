export const exists =
  (name: string, args: string[] = process.argv): boolean => {
    for (let i = 0; i < args.length; i++) {
      if (args[i] === name) {
        return true
      }
    }
    return false
  }

export default exists
