import { Clock, CurrencyDollar, MapPin } from 'phosphor-react'
import {
  AddressDelivery,
  DeliveryTime,
  FormOfPayment,
  SuccessContainer
} from './styles'

import ImgDelivery from '../../assets/images/delivery.svg'
import { useContext, useEffect } from 'react'
import { CartContext } from '../../contexts/CartContext'

type PaymentMethod = 'credit card' | 'debit card' | 'money' | null
interface PaymentMethodData {
  money: string
  'credit card': string
  'debit card': string
}

export function Success() {
  const { address, payment, resetCart } = useContext(CartContext)

  useEffect(() => {
    resetCart()
  }, [])

  const paymentMethodString = (value: PaymentMethod) => {
    const paymentMethod = {
      money: 'Dinheiro',
      'credit card': 'Cartão de Crédito',
      'debit card': 'Cartão de Débito'
    }
    return paymentMethod[value!]
  }

  return (
    <SuccessContainer>
      <aside>
        <h1>Uhu! Pedido confirmado</h1>
        <span>Agora é só aguardar que logo o café chegará até você</span>

        <div>
          <AddressDelivery>
            <i>
              <MapPin size={20} />
            </i>
            <div>
              <span>
                Entrega em{' '}
                <strong>
                  {address.street}, {address.number} <br />
                </strong>
                {address.district} - {address.city}, {address.uf}
              </span>
            </div>
          </AddressDelivery>
          <DeliveryTime>
            <i>
              <Clock size={20} />
            </i>
            <div>
              <span>Previsão de entrega</span>
              <strong>20 min - 30 min</strong>
            </div>
          </DeliveryTime>

          <FormOfPayment>
            <i>
              <CurrencyDollar size={20} />
            </i>
            <div>
              <span>Pagamento na entrega</span>
              <strong>{paymentMethodString(payment)}</strong>
            </div>
          </FormOfPayment>
        </div>
      </aside>

      <img src={ImgDelivery} alt="" />
    </SuccessContainer>
  )
}
