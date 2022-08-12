import { InputAmountContainer } from './styles'

export function InputAmount() {
  return (
    <InputAmountContainer>
      <button type="button"> - </button>
      <input type="text" readOnly value="0"></input>
      <button type="button"> + </button>
    </InputAmountContainer>
  )
}
