import { v4 as uuidv4 } from 'uuid'

import {
  CoffeeCardContainer,
  InsertCart,
  Price,
  PriceAndQuantity,
  TypeCoffee
} from './styles'

import { ShoppingCart } from 'phosphor-react'
import { InputAmount } from '../InputAmount'

interface CoffeeCardProps {
  image: string
  typesCoffee: string[]
  name: string
  description: string
  price: number
}

export function CoffeeCard({
  image,
  typesCoffee,
  name,
  description,
  price
}: CoffeeCardProps) {
  //console.log(typesCoffee)

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
          <InputAmount />
          <button type="button">
            <ShoppingCart size={20} />
          </button>
        </InsertCart>
      </PriceAndQuantity>
    </CoffeeCardContainer>
  )
}
