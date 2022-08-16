import { Trash } from 'phosphor-react'
import { useContext, useState } from 'react'
import { CartContext } from '../../contexts/CartContext'
import { Product } from '../../types'
import { InputAmount } from '../InputAmount'
import { ItenCardContainer } from './styles'

interface ItemCartProps {
  id: number
  image: string
  name: string
  amount: number
  price: number
}

export function ItemCart({ id, image, name, amount, price }: ItemCartProps) {
  const { removeProduct, updateProduct } = useContext(CartContext)
  const [amountInCart, setAmountInCart] = useState(amount)

  function handleRemoveItemCart(id: number) {
    removeProduct(id)
  }

  function handleSetAmountProduct(amount: number) {
    setAmountInCart(amount)
    updateProduct(id, amount)
  }

  return (
    <ItenCardContainer>
      <div>
        <img src={image} alt="" />
        <span>{name}</span>

        <div className="input">
          <InputAmount
            preLoadAmount={amountInCart}
            handleSetAmountProduct={handleSetAmountProduct}
          />
        </div>

        <button type="button" onClick={() => handleRemoveItemCart(id)}>
          <Trash size={20} />
        </button>
        <strong>R$ {(price * amountInCart).toFixed(2)}</strong>
      </div>
    </ItenCardContainer>
  )
}
