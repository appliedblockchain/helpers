
export class Array1<T> {

  values: T[]

  constructor(values: T[] = []) {
    this.values = values
  }

  get length(): number {
    return this.values.length
  }

  get(index: number): T {
    return this.values[index - 1]
  }

  set(index: number, value: T) {
    this.values[index - 1] = value
  }

  push(value: T): number {
    return this.values.push(value)
  }

  pop(): T {
    if (this.length === 0) {
      throw new Error('Can\'t pop from empty 1-base indexed array.')
    }
    return this.values.pop()
  }

  swap(i: number, j: number) {
    const t = this.get(i)
    this.set(i, this.get(j))
    this.set(j, t)
  }

}

export default Array1
