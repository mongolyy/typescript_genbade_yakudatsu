import { PersonName } from './personName'
import { Address } from './address'
import { ContactMethod } from './contactMethod'

export class Customer {
  readonly personName: PersonName
  readonly address: Address
  readonly contactMethod: ContactMethod

  constructor(personName: PersonName, address: Address, contactMethod: ContactMethod) {
    this.personName = personName
    this.address = address
    this.contactMethod = contactMethod
  }
}
