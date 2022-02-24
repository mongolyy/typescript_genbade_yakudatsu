export class PersonName {
  private readonly firstName: string
  private readonly lastName: string

  constructor(firstName: string, lastName: string) {
    this.firstName = firstName
    this.lastName = lastName
  }

  fullName = () => {
    return `${this.firstName} ${this.lastName}`
  }
}
