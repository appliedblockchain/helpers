
const I = BigInt

const S = new ArrayBuffer(200)
const L = new BigUint64Array(S)
const B = new Uint8Array(S)

const C = new BigUint64Array(5)
const D = new BigUint64Array(5)
const T = new BigUint64Array(5)

function RL(a, n) {
  return ((a >> (64n - (I(n) % 64n))) + (a << (I(n) % 64n))) % (1n << 64n)
}

function S_zero() {
  for (let i = 0; i < 200; i++) {
    B[i] = 0
  }
}

function S_f1600() {
  let R = 1
  for (let i = 0; i < 24; i++) {

    for (let x = 0; x < 5; x++) {
      C[x] = 0n
      for (let y = 0; y < 5; y++) {
        C[x] ^= L[y * 5 + x]
      }
    }

    for (let x = 0; x < 5; x++) {
      D[x] = C[(x + 4) % 5] ^ RL(C[(x + 1) % 5], 1)
    }

    for (let x = 0; x < 5; x++) {
      for (let y = 0; y < 5; y++) {
        L[y * 5 + x] ^= D[x]
      }
    }

    {
      let [ x, y ] = [ 1, 0 ]
      let c = L[y * 5 + x]
      for (let t = 0; t < 24; t++) {
        [ x, y ] = [ y, (2 * x + 3 * y) % 5 ]
        ;[ c, L[y * 5 + x ] ] = [ L[ y * 5 + x ], RL(c, ((t + 1) * (t + 2)) >> 1) ]
      }
    }

    for (let y = 0; y < 5; y++) {
      for (let x = 0; x < 5; x++) {
        T[x] = L[y * 5 + x]
      }
      for (let x = 0; x < 5; x++) {
        L[y * 5 + x] = T[x] ^ ((~T[(x+1)%5]) & T[(x+2)%5])
      }
    }

    for (let j = 0; j < 7; j++) {
      R = ((R << 1) ^ ((R >> 7)*0x71)) % 256
      if (R & 2) {
        L[0] ^= (1n << ((1n<<I(j))-1n))
      }
    }
  }
}

function keccak256(xs) {

  const xn = xs.length

  S_zero()

  let i = 0
  for (; i < xn - 136; i += 136) {
    for (let j = 0; j < 136; j++) {
      B[j] ^= xs[i + j]
    }
    S_f1600()
  }

  for (let j = 0; i < xn; i++, j++) {
    B[j] ^= xs[i]
  }

  B[xn % 136] ^= 0x01
  B[135] ^= 0x80

  S_f1600()

  return B.slice(0, 32)
}

const { isBuffer } = Buffer

function keccak256OfBuffer(value) {
  if (!isBuffer(value)) {
    throw new TypeError(`Expected buffer, got ${inspect(value)}.`)
  }
  return Buffer.from(keccak256(value))
}

module.exports = keccak256OfBuffer
