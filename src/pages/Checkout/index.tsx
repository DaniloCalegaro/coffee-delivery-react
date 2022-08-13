import { MapPin } from 'phosphor-react'
import { CheckountAddress } from '../../components/CheckountAddress'
import { Payment } from '../../components/Payment'
import { Summary } from '../../components/Summary'
import { CheckoutContainer, CompleteOrder, InfoSummary } from './styles'

export function Checkout() {
  return (
    <CheckoutContainer>
      <CompleteOrder>
        <h2>Complete seu pedido</h2>
        <CheckountAddress />
        <Payment />
      </CompleteOrder>

      <InfoSummary>
        <h2>Cafés selecionados</h2>
        <Summary />
      </InfoSummary>
    </CheckoutContainer>
  )
}
