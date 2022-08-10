import { MapPin, ShoppingCart } from 'phosphor-react'

import { CartContainer, HeaderContainer } from './styles'
import logo from '../../assets/images/logo.svg'
import { Location } from '../Location'
import { Cart } from '../Cart'

export function Header() {
  return (
    <HeaderContainer>
      <img src={logo} alt="" />
      <CartContainer>
        <ul>
          <li>
            <Location />
          </li>

          <li>
            <Cart amount={5} />
          </li>
        </ul>
      </CartContainer>
    </HeaderContainer>
  )
}
