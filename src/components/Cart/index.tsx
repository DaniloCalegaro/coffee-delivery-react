import { ShoppingCart } from 'phosphor-react'
import { AmountCart, CartContainer } from './styles'

interface CartProps {
  amount?: number
}

export function Cart({ amount }: CartProps) {
  return (
    <CartContainer>
      <a href="#">
        <ShoppingCart size={19} />
      </a>

      {!!amount && (
        <AmountCart>
          <span>{amount}</span>
        </AmountCart>
      )}
    </CartContainer>
  )
}
