import { ShippingCost } from './shippingCost'
import { Quantity } from './quantity'
import { Customer, Customers } from './customer'

/**
 * 送料を算出するメソッド
 * @param {number} basePrice
 * @returns {number}
 */
const shippingCost = (basePrice: number): number => {
  const cost: ShippingCost = new ShippingCost(basePrice)
  return cost.amount()
}

console.log('====== ShippingCost ======')
console.log(`2,900円の商品に対する送料：${shippingCost(2900)}`)
console.log(`3,000円の商品に対する送料：${shippingCost(3000)}`)
console.log('====== Quantity ======')
const quantity = new Quantity(1)
const newQuantity = quantity.add(new Quantity(10))
console.log(`数量を10足す。Origin: ${quantity.value}, Destination: ${newQuantity.value}`)
console.log('====== Customer ======')
const customers = new Customers([new Customer('田中'), new Customer('佐藤')])
const newCustomers = customers.add(new Customer('鈴木'))
console.log(`鈴木さんを追加する。Origin: ${JSON.stringify(customers)}, Destination: ${JSON.stringify(newCustomers)}`)
