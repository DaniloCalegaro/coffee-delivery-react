import { Coffee, Package, ShoppingCart, Timer } from 'phosphor-react'
import { HomeContainer, IntroSection, QualityList } from './styles'

import ImgCoffeeDelivery from '../../assets/images/image-home.svg'

import ImgIntroBackground from '../../assets/images/intro-background.svg'

export function Home() {
  return (
    <HomeContainer>
      <IntroSection>
        <aside>
          <h1>Encontre o café perfeito para qualquer hora do dia</h1>
          <strong>
            Com o Coffee Delivery você recebe seu café onde estiver, a qualquer
            hora
          </strong>

          <QualityList>
            <li>
              <i>
                <ShoppingCart size={15} />
              </i>
              <span>Compra simples e segura</span>
            </li>
            <li>
              <i>
                <Timer size={15} />
              </i>
              <span>Entrega rápida e rastreada</span>
            </li>
            <li>
              <i>
                <Package size={15} />
              </i>
              <span>Embalagem mantém o café intacto</span>
            </li>
            <li>
              <i>
                <Coffee size={15} />
              </i>
              <span>O café chega fresquinho até você</span>
            </li>
          </QualityList>
        </aside>
        <img
          src={ImgCoffeeDelivery}
          alt="Copo de café com logo Coffee Delivery"
        />
      </IntroSection>
    </HomeContainer>
  )
}
