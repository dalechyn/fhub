export class LruSet<T> extends Set<T> {
  private maxSize: number

  constructor(size: number, iterable?: Iterable<T> | null) {
    super(iterable)
    this.maxSize = size
  }

  override add(value: T): this {
    super.add(value)
    if (this.maxSize && this.size > this.maxSize) {
      const firstItem = this.values().next().value
      if (firstItem) this.delete(firstItem)
    }
    return this
  }
  override union<T>(value: Set<T>): LruSet<T> {
    const result = new LruSet<T>(this.maxSize, super.union(value) as any)
    if (result.maxSize && result.size > result.maxSize) {
      const iterator = result.values()
      for (let i = 0; i < result.size - result.maxSize; i++) {
        const firstItem = iterator.next().value
        if (firstItem) result.delete(firstItem)
      }
    }
    return result
  }
}
