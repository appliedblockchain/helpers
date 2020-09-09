export function isBlockQueryTag(value: unknown): boolean {
  return (value === 'earliest' || value === 'latest' || value === 'pending')
}

export default isBlockQueryTag
