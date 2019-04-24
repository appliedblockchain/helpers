// @flow

const EventEmitter = require('events')
const arrayOf = require('./array-of')
const { assign } = Object

const defaultDepth = 2
const defaultInterval = 30 * 1000

class ExpirySet/*:: <T> */ extends EventEmitter {

  /*::

  interval: number
  intervalId: ?IntervalID
  depth: number
  sets: Set<T>[]
  i: number

  */

  constructor(interval /*: number */ = defaultInterval, depth /*: number */ = defaultDepth) {
    super()
    assign(this, {
      i: 0,
      intervalId: null,
      interval,
      depth,
      sets: arrayOf(depth, () => new Set)
    })
    this.start()
  }

  get size() {
    return this.sets.reduce((r, set) => r + set.size, 0)
  }

  add(value /*: T */) {
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

  delete(value /*: T */) {
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

  *entries() /*: Iterator<[ T, T ]> */ {
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

module.exports = ExpirySet
