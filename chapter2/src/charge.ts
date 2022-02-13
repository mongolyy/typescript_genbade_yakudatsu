import { Fee } from './fee'
import { Yen } from './Yen'

export class Charge {
  fee: Fee

  constructor(fee: Fee) {
    this.fee = fee
  }

  yen = (): Yen => {
    return this.fee.yen()
  }
}
