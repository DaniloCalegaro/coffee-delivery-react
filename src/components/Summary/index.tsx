import { useContext } from 'react'
import { CartContext } from '../../contexts/CartContext'
import { ItemCart } from '../ItemCart'
import { SummaryContainer } from './styles'

export function Summary() {
  const { cart } = useContext(CartContext)

  const totalItens = cart.reduce((sum, item) => {
    return sum + item.price * item.amount
  }, 0)

  const deliveryFee = 3.5

  const total = totalItens + deliveryFee

  return (
    <SummaryContainer>
      {cart.map(item => (
        <ItemCart
          key={item.id}
          image={item.image}
          name={item.name}
          amount={item.amount}
          price={item.price}
        />
      ))}
      <div className="sums">
        <span>Total de Itens</span>
        <strong>R$ {totalItens.toFixed(2)}</strong>
        <span>Entrega</span>
        <strong>R$ {deliveryFee.toFixed(2)}</strong>
        <span>Total</span>
        <strong>R$ {total.toFixed(2)}</strong>
        <button type="button">Confirmar pedido</button>
      </div>
    </SummaryContainer>
  )
}
