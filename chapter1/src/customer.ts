export class Customer {
  name: string

  constructor(name: string) {
    this.name = name
  }
}

export class Customers {
  customers: Customer[]

  constructor(customers: Customer[]) {
    this.customers = customers
  }

  add = (customer: Customer): Customers => {
    const result = [...this.customers]
    result.push(customer)
    return new Customers(result)
  }
}
