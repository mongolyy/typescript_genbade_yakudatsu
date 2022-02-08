export class ShippingCost {
  static minimumForFree: number = 3000
  static cost: number = 500

  basePrice: number

  constructor(basePrice: number) {
    this.basePrice = basePrice
  }

  amount = (): number => {
    if (this.basePrice < ShippingCost.minimumForFree) return ShippingCost.cost
    return 0
  }
}
