
export function isBlockQueryTag(value : any) : boolean {
  return (
    value === 'earliest' ||
    value === 'latest' ||
    value === 'pending'
  )
}

export default isBlockQueryTag;