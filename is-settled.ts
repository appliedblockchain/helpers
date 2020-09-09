import isPending from './is-pending'

export const isSettled =
  (value: Promise<unknown>): boolean =>
    !isPending(value)

export default isSettled
