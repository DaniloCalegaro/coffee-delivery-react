import { Trash } from 'phosphor-react'
import { InputAmount } from '../InputAmount'
import { ItenCardContainer } from './styles'

export function ItensCart() {
  return (
    <ItenCardContainer>
      <div>
        <img src="./imagesCoffees/expresso.svg" alt="" />
        <span>Expresso Tradicional</span>

        <div className="input">
          <InputAmount />
        </div>

        <button type="button">
          <Trash size={20} />
        </button>
        <strong>R$9,90</strong>
      </div>
    </ItenCardContainer>
  )
}
