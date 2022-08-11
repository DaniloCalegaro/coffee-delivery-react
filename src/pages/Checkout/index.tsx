import { MapPin } from 'phosphor-react'
import {
  CheckoutContainer,
  InfoContainer,
  SectionAddress,
  Summary
} from './styles'

export function Checkout() {
  return (
    <CheckoutContainer>
      <InfoContainer>
        <h2>Complete seu pedido</h2>
        <SectionAddress>
          <div className="aderressInfo">
            <i>
              <MapPin size={20} />
            </i>

            <div>
              <strong>Endereço da entrega</strong>
              <span>Informe o endereço onde deseja receber seu pedido</span>
            </div>
          </div>

          <form>
            <input id="cep" type="text" placeholder="CEP" />
            <input id="road" type="text" placeholder="Rua" />
            <input id="number" type="text" placeholder="Número" />
            <input id="complement" type="text" placeholder="Complemento" />
            <input id="district" type="text" placeholder="Bairro" />
            <input id="city" type="text" placeholder="Cidade" />
            <input id="uf" type="text" placeholder="UF" />
          </form>
        </SectionAddress>
      </InfoContainer>

      <InfoContainer>
        <h2>Cafés selecionados</h2>
        <Summary></Summary>
      </InfoContainer>
    </CheckoutContainer>
  )
}
