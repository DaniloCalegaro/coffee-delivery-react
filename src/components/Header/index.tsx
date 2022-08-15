import { MapPin, ShoppingCart } from 'phosphor-react'

import { CartContainer, HeaderContainer } from './styles'
import logo from '../../assets/images/logo.svg'
import { Location } from '../Location'
import { Cart } from '../IconCart'
import { NavLink } from 'react-router-dom'
import { useContext } from 'react'
import { CartContext } from '../../contexts/CartContext'

export function Header() {
  const { cart } = useContext(CartContext)
  const cartSize = cart.length

  return (
    <HeaderContainer>
      <NavLink to="/" title="Coffee Delivery">
        <img src={logo} alt="" />
      </NavLink>
      <CartContainer>
        <Location />
        <NavLink to="/checkout" title="Checkout">
          <Cart amount={cartSize} />
        </NavLink>
      </CartContainer>
    </HeaderContainer>
  )
}
