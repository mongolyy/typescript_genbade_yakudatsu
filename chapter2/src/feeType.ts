import { AdultFee, ChildFee, SeniorFee } from './fee'

const FeeType = {
  Adult: new AdultFee(),
  Child: new ChildFee(),
  Senior: new SeniorFee()
} as const
type FeeType = typeof FeeType[keyof typeof FeeType]

export { FeeType }
