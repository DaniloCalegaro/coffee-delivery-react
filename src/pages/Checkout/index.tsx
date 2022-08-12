import { MapPin } from 'phosphor-react'
import { CheckountAddress } from '../../components/FormAddress'
import { Payment } from '../../components/Payment'
import {
  CheckoutContainer,
  InfoAddress,
  InfoSummary,
  SectionPayment,
  Summary
} from './styles'

export function Checkout() {
  return (
    <CheckoutContainer>
      <InfoAddress>
        <h2>Complete seu pedido</h2>
        <CheckountAddress />
      </InfoAddress>

      <Payment />

      <InfoSummary>
        <h2>Cafés selecionados</h2>
        <Summary></Summary>
      </InfoSummary>
    </CheckoutContainer>
  )
}
