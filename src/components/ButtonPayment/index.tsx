import { useContext } from 'react'
import { CartContext } from '../../contexts/CartContext'

import { ButtonContainer } from './styles'

interface ButtonPaymentProps {
  value: string
  name: string
  icon?: React.ReactNode
  selected?: boolean
}

export function ButtonPayment({
  value,
  name,
  icon,
  selected = false
}: ButtonPaymentProps) {
  const { selectPayment } = useContext(CartContext)

  function handleSelectPayment(method: string) {
    switch (method) {
      case 'credit card':
        selectPayment('credit card')
        break

      case 'debit card':
        selectPayment('debit card')
        break

      case 'money':
        selectPayment('money')
        break

      default:
        selectPayment(null)
    }
  }

  return (
    <ButtonContainer
      seleted={selected}
      value={value}
      onClick={() => handleSelectPayment(value)}
    >
      {icon}
      {name}
    </ButtonContainer>
  )
}
