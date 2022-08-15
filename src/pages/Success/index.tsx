import { Clock, CurrencyDollar, MapPin } from 'phosphor-react'
import {
  AddressDelivery,
  DeliveryTime,
  FormOfPayment,
  SuccessContainer
} from './styles'

import ImgDelivery from '../../assets/images/delivery.svg'

export function Success() {
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
                  Rua João Martinelli, 102 <br />
                </strong>
                Farrapos - Porto Alegre, RS
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
              <strong>Cartão de Crédito</strong>
            </div>
          </FormOfPayment>
        </div>
      </aside>

      <img src={ImgDelivery} alt="" />
    </SuccessContainer>
  )
}
