import { Yen } from './Yen'

export interface Fee {
  yen(): Yen
  label(): string
}

export class AdultFee implements Fee {
  yen = (): Yen => {
    return new Yen(100)
  }

  label = (): string => {
    return "大人"
  }
}

export class ChildFee implements Fee {
  yen = (): Yen => {
    return new Yen(50)
  }

  label = (): string => {
    return "子供"
  }
}

export class SeniorFee implements Fee {
  yen = (): Yen => {
    return new Yen(80)
  }

  label = (): string => {
    return "シニア"
  }
}
