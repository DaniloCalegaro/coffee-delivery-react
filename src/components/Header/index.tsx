import { MapPin, ShoppingCart } from 'phosphor-react'

import { CartContainer, HeaderContainer } from './styles'
import logo from '../../assets/images/logo.svg'

export function Header() {
  return (
    <HeaderContainer>
      <img src={logo} alt="" />
      <CartContainer>
        <ul>
          <li>
            <a href="#">
              <MapPin size={20} />
              <span>Batatais, SP</span>
            </a>
          </li>

          <li>
            <a href="#">
              <ShoppingCart size={20} />
            </a>
          </li>
        </ul>
      </CartContainer>
    </HeaderContainer>
  )
}
