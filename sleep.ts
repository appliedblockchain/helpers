export const sleep =
  (milliseconds: number): Promise<void> =>
    new Promise(resolve => setTimeout(resolve, milliseconds))

export default sleep
