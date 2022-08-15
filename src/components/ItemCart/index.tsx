import { Trash } from 'phosphor-react'
import { Product } from '../../types'
import { InputAmount } from '../InputAmount'
import { ItenCardContainer } from './styles'

interface ItemCartProps {
  image: string
  name: string
  amount: number
  price: number
}

export function ItemCart({ image, name, amount, price }: ItemCartProps) {
  return (
    <ItenCardContainer>
      <div>
        <img src={image} alt="" />
        <span>{name}</span>

        <div className="input">
          <InputAmount preLoadAmount={amount} />
        </div>

        <button type="button">
          <Trash size={20} />
        </button>
        <strong>R$ {(price * amount).toFixed(2)}</strong>
      </div>
    </ItenCardContainer>
  )
}
