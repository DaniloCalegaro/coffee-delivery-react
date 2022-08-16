import { v4 as uuidv4 } from 'uuid'
import toast from 'react-hot-toast'

import {
  CoffeeCardContainer,
  InsertCart,
  Price,
  PriceAndQuantity,
  TypeCoffee
} from './styles'

import { ShoppingCart } from 'phosphor-react'
import { InputAmount } from '../InputAmount'

import { useContext, useState } from 'react'
import { CartContext } from '../../contexts/CartContext'

interface CoffeeCardProps {
  id: number
  image: string
  typesCoffee: string[]
  name: string
  description: string
  price: number
}

export function CoffeeCard({
  id,
  image,
  typesCoffee,
  name,
  description,
  price
}: CoffeeCardProps) {
  const { addProduct } = useContext(CartContext)
  const [amountProduct, setAmountProduct] = useState(0)

  function handleSetAmountProduct(amount: number) {
    setAmountProduct(amount)
  }

  function handleAddProduct(id: number, amount: number) {
    if (amount > 0) {
      addProduct(id, amount)
    } else {
      toast.error('Ops! Adicione quantas cafés deseja')
    }
  }

  return (
    <CoffeeCardContainer>
      <img src={image} alt="" />
      <TypeCoffee>
        {typesCoffee.map(type => (
          <span key={uuidv4()}>{type}</span>
        ))}
      </TypeCoffee>
      <strong>{name}</strong>
      <p>{description}</p>
      <PriceAndQuantity>
        <Price>
          <span>R$</span>
          <strong>{price.toFixed(2)}</strong>
        </Price>
        <InsertCart>
          <InputAmount handleSetAmountProduct={handleSetAmountProduct} />
          <button
            type="button"
            onClick={() => handleAddProduct(id, amountProduct)}
          >
            <ShoppingCart size={20} />
          </button>
        </InsertCart>
      </PriceAndQuantity>
    </CoffeeCardContainer>
  )
}
