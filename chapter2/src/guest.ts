import { FeeType } from './feeType'

export class Guest {
  type: FeeType

  constructor(type: FeeType) {
    this.type = type
  }

  isAdult = (): boolean => {
    return this.type === FeeType.Adult
  }
}
