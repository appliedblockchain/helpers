import { inspect } from 'util'
import isString from '../is-string'
import keccak256OfBuffer from '../keccak256-of-buffer'

export const hashOfSignature =
  (signature: string): Buffer => {
    if (!isString(signature)) {
      throw new TypeError(`Expected string signature, got ${inspect(signature)}.`)
    }
    return keccak256OfBuffer(Buffer.from(signature, 'utf8')).slice(0, 4)
  }

export default hashOfSignature
