import { v4 as uuidv4 } from 'uuid'

import {
  CoffeeCardContainer,
  InputQuantity,
  Price,
  PriceAndQuantity,
  TypeCoffee
} from './styles'

import { ShoppingCart } from 'phosphor-react'

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
          <strong>{price}</strong>
        </Price>
        <InputQuantity>
          <div>
            <button type="button"> - </button>
            <input type="text" readOnly value="0"></input>
            <button type="button"> + </button>
          </div>
          <button type="button">
            <ShoppingCart size={20} />
          </button>
        </InputQuantity>
      </PriceAndQuantity>
    </CoffeeCardContainer>
  )
}
