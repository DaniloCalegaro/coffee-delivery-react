import { MapPin, ShoppingCart } from 'phosphor-react'

import { CartContainer, HeaderContainer } from './styles'
import logo from '../../assets/images/logo.svg'
import { Location } from '../Location'
import { Cart } from '../IconCart'
import { NavLink } from 'react-router-dom'

export function Header() {
  return (
    <HeaderContainer>
      <NavLink to="/" title="Coffee Delivery">
        <img src={logo} alt="" />
      </NavLink>
      <CartContainer>
        <Location />
        <NavLink to="/checkout" title="Checkout">
          <Cart amount={5} />
        </NavLink>
      </CartContainer>
    </HeaderContainer>
  )
}
