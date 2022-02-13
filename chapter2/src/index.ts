import { Charge } from './charge'
import { AdultFee, ChildFee, SeniorFee } from './fee'
import { Reservation } from './reservation'
import { FeeType } from './feeType'
import { Guest } from './guest'
import { State } from './state'
import { StateTransitions } from './stateTransitions'

console.log('====== Charge ======')
const adultCharge = new Charge(new AdultFee)
const childCharge = new Charge(new ChildFee)
const seniorCharge = new Charge(new SeniorFee)
console.log(`大人料金: ${adultCharge.yen().amount}円`)
console.log(`子供料金: ${childCharge.yen().amount}円`)
console.log(`シニア料金: ${seniorCharge.yen().amount}円`)

console.log('====== Reservation ======')
const reservation = new Reservation()
console.log(`0名の場合の合計金額: ${reservation.feeTotal().amount}`)
reservation.addFee(new AdultFee)
console.log(`大人1名の場合の合計金額: ${reservation.feeTotal().amount}`)
reservation.addFee(new ChildFee)
reservation.addFee(new ChildFee)
reservation.addFee(new SeniorFee)
console.log(`大人1名、子供2名、シニア1名の場合の合計金額: ${reservation.feeTotal().amount}`)

console.log('====== Guest ======')
const adultGuest = new Guest(FeeType.Adult)
const childGuest = new Guest(FeeType.Child)
console.log(`adultGuestは大人か？: ${adultGuest.isAdult()}`)
console.log(`childGuestは大人か？: ${childGuest.isAdult()}`)

console.log('====== State ======')
const states = Object.keys(State)
console.log(`全ての状態: ${states}`)
const stateTransitions = new StateTransitions()
console.log(`審査中から承認済に遷移できるか？: ${stateTransitions.canTransit(State.審査中, State.承認済)}`)
console.log(`審査中から実施中に遷移できるか？: ${stateTransitions.canTransit(State.審査中, State.実施中)}`)
