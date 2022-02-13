import { Fee } from './fee'
import { Yen } from './Yen'

export class Reservation{
  fees: Fee[]

  constructor() {
    this.fees = []
  }

  addFee = (fee: Fee): void => {
    this.fees.push(fee)
  }

  feeTotal = (): Yen => {
    return this.fees.reduce((acc, cur) => {
      return acc.add(cur.yen())
    }, new Yen(0))
  }
}
