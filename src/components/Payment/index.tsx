import { Bank, CreditCard, CurrencyDollar, Money } from 'phosphor-react'
import { useContext, useState } from 'react'
import { CartContext } from '../../contexts/CartContext'
import { ButtonPayment } from '../ButtonPayment'
import { MethodPayment, PaymentContainer } from './styles'

export function Payment() {
  const { payment } = useContext(CartContext)

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
          value="credit card"
          icon={<CreditCard size={20} />}
          selected={payment === 'credit card'}
        />
        <ButtonPayment
          name="Cartão de débito"
          value="debit card"
          icon={<Bank size={20} />}
          selected={payment === 'debit card'}
        />
        <ButtonPayment
          name="Dinheiro"
          value="money"
          icon={<Money size={20} />}
          selected={payment === 'money'}
        />
      </MethodPayment>
    </PaymentContainer>
  )
}
