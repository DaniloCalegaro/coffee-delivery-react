import { Bank, CreditCard, CurrencyDollar, Money } from 'phosphor-react'
import { ButtonPayment } from '../ButtonPayment'
import { MethodPayment, PaymentContainer } from './styles'

export function Payment() {
  return (
    <PaymentContainer>
      <div className="paymentInfo">
        <i>
          <CurrencyDollar size={20} />
        </i>

        <div>
          <strong>Pagamento</strong>
          <span>
            O pagamento é feito na entrega. Escolha a forma que deseja pagar
          </span>
        </div>
      </div>

      <MethodPayment>
        <ButtonPayment
          name="Cartão de crédito"
          icon={<CreditCard size={20} />}
          seleted
        />
        <ButtonPayment name="Cartão de débito" icon={<Bank size={20} />} />
        <ButtonPayment name="Dinheiro" icon={<Money size={20} />} />
      </MethodPayment>
    </PaymentContainer>
  )
}
