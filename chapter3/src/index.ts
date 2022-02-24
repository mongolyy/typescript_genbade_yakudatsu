import { PersonName } from './personName'
import { Customer } from './customer'

console.log('====== Customer ======')
const personName = new PersonName('太郎', '山田')
const address = { postalCode: '100-0001', city: '東京都', address: '千代田区千代田x-x' }
const contactMethod = { telephone: '03-xxxx-xxxx', mailAddress: 'test@example.com', telephoneNotPreferred: false }
const customer = new Customer(personName, address, contactMethod)
console.log(`フルネームは${customer.personName.fullName()}です`)
