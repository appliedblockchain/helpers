// @flow strict

import Array1 from './array1'

import { Cmp } from "./types/cmp"

class Heap<T> {




  cmp: Cmp<T>
  values: Array1<T>



  constructor(cmp: Cmp<T>) {
    this.cmp = cmp
    this.values = new Array1()
  }

  get length(): number {
    return this.values.length
  }

  get(i: number): T {
    return this.values.get(i)
  }

  swap(i: number, j: number) {
    this.values.swap(i, j)
  }

  root(): T {
    if (this.length === 0) {
      throw new Error('Can\'t return root for empty heap.')
    }
    return this.values.get(1)
  }

  heapifyUp(index: number): number {
    let i = index
    while (i > 1) {
      const j = i >> 1
      if (this.cmp(this.get(i), this.get(j)) === -1) {
        this.swap(i, j)
      }
      i = j
    }
    return i
  }

  heapifyDown(index: number): number {
    let i = index
    const n = this.length
    while (true) {
      const j = i
    }
  }

  push(value: T) {
    const index = this.values.push(value)
    return this.heapifyUp(index)
  }

  pop(): T {
    if (this.length === 0) {
      throw new Error('Can\'t pop from empty heap')
    }
    const result = this.get(1)
    this.swap(1, this.length)
    this.heapifyDown(1)
    return result
  }

}

export default Heap;