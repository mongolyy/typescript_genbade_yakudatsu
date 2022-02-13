export class Yen {
  amount: number

  constructor(amount: number) {
    this.amount = amount
  }

  add = (yen: Yen): Yen => {
    return new Yen(this.amount + yen.amount)
  }
}
