import { ShoppingCart } from 'phosphor-react'
import { AmountCart, CartContainer } from './styles'

interface CartProps {
  amount?: number
}

export function Cart({ amount }: CartProps) {
  return (
    <CartContainer>
      <ShoppingCart size={19} />

      {!!amount && (
        <AmountCart>
          <span>{amount}</span>
        </AmountCart>
      )}
    </CartContainer>
  )
}
