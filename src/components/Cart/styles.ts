import styled from 'styled-components'

export const CartContainer = styled.div`
  background: ${props => props.theme['yellow-light']};
  border-radius: 6px;
  padding: 0.6rem;

  position: relative;

  a {
    color: ${props => props.theme['yellow-dark']};
    display: flex;
  }
`

export const AmountCart = styled.div`
  background: ${props => props.theme['yellow-dark']};
  width: 1.25rem;
  height: 1.25rem;
  border-radius: 50%;

  display: flex;
  justify-content: center;

  position: absolute;
  top: -0.625rem;
  right: -0.625rem;

  span {
    color: ${props => props.theme['white']};
    font-weight: bold;
    font-size: 0.75rem;
  }
`
