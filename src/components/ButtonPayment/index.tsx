import { useState } from 'react'
import { ButtonContainer } from './styles'

interface ButtonPaymentProps {
  name: string
  icon?: React.ReactNode
  seleted?: boolean
}

export function ButtonPayment({
  name,
  icon,
  seleted = false
}: ButtonPaymentProps) {
  const [activePayment, setActivePayment] = useState(false)

  return (
    <ButtonContainer
      seleted={activePayment}
      onClick={() => setActivePayment(!activePayment)}
    >
      {icon}
      {name}
    </ButtonContainer>
  )
}
