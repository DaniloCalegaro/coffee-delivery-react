import styled from 'styled-components'

export const PaymentContainer = styled.div`
  background: ${props => props.theme['base-card']};
  border-radius: 6px;
  padding: 2.5rem;
  margin-top: 1rem;
  width: 100%;

  .paymentInfo {
    display: flex;
    gap: 0.7rem;

    i {
      color: ${props => props.theme['purple']};
    }

    span {
      display: block;
      font-size: 0.875rem;
    }
  }
`

export const MethodPayment = styled.div`
  margin-top: 2rem;
  display: flex;
  flex-direction: column;

  gap: 0.75rem;

  button {
    flex: 1;
  }

  @media (min-width: 720px) {
    flex-direction: row;
  }
`
