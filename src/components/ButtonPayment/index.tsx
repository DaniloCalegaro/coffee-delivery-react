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
  return (
    <ButtonContainer seleted={seleted}>
      {icon}
      {name}
    </ButtonContainer>
  )
}
