export const get =
  (object: object, path: string | number | string[] | number[], defaultValue: unknown): unknown => {
    const xs: any = Array.isArray(path) ? path : [path]
    let r = object
    for (const x of xs) {
      if (r == null) {
        r = undefined
        break
      }
      r = (r as any)[x]
    }
    return typeof r === 'undefined' ?
      defaultValue :
      r
  }

export default get
