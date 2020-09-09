import { mask, variantRfc4122 } from './uuid'
import { randomBytes } from 'crypto'
import uuidStringOfBuffer from './uuid-string-of-buffer'

export const uuidV4 =
  (): string =>
    uuidStringOfBuffer(mask(randomBytes(16), 4, variantRfc4122))

export default uuidV4