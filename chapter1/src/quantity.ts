import { IllegalArgumentException } from './error'

export class Quantity {
  static MIN: number = 1
  static MAX: number = 100

  value: number

  constructor(value: number) {
    if (value < Quantity.MIN) throw new IllegalArgumentException(`不正${Quantity.MIN}未満`)
    if (value > Quantity.MAX) throw new IllegalArgumentException(`不正${Quantity.MAX}超`)
    this.value = value
  }

  canAdd = (other: Quantity): boolean => {
    const added = this.addValue(other)
    return added <= Quantity.MAX
  }

  add = (other: Quantity): Quantity => {
    if (!this.canAdd(other)) throw new IllegalArgumentException(`不正:合計が${Quantity.MAX}超`)
    const added = this.addValue(other)
    return new Quantity(added)
}

  private addValue = (other: Quantity): number => {
    return this.value + other.value
  }
}
