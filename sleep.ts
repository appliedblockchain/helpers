export const sleep =
  (milliseconds: number) =>
    new Promise(resolve => setTimeout(resolve, milliseconds))

export default sleep