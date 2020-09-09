import { EventEmitter } from 'events'
import arrayOf from './array-of'

const defaultDepth = 2
const defaultInterval = 30 * 1000

class ExpirySet<T> extends EventEmitter {

  interval: number
  intervalId: null | NodeJS.Timeout
  depth: number
  sets: Set<T>[]
  i: number

  constructor(interval = defaultInterval, depth = defaultDepth) {
    super()
    this.i = 0
    this.intervalId = null
    this.interval = interval
    this.depth = depth
    this.sets = arrayOf(depth, () => new Set)
    this.start()
  }

  get size(): number {
    return this.sets.reduce((r, set) => r + set.size, 0)
  }

  add(value: T): this {
    const { i, depth, sets } = this
    const set = sets[i % depth]
    if (!set.has(value)) {
      set.add(value)
      for (let j = 1; j < depth; j++) {
        sets[(i + j) % depth].delete(value)
      }
    }
    return this
  }

  delete(value: T): boolean {
    for (const set of this.sets) {
      if (set.delete(value)) {
        return true
      }
    }
    return false
  }

  clear() {
    for (const set of this.sets) {
      set.clear()
    }
  }

  *entries() {
    for (const set of this.sets) {
      yield* set.entries()
    }
  }

  start() {
    this.stop()
    this.intervalId = setInterval(() => {
      const next = this.sets[++this.i % this.depth]
      for (const e of next) {
        this.emit('expired', e)
      }
      next.clear()
    }, this.interval)
  }

  stop() {
    if (this.intervalId) {
      clearInterval(this.intervalId)
      this.intervalId = null
    }
  }

}

export default ExpirySet
