import styled from 'styled-components'

export const CoffeeCardContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  background: ${props => props.theme['base-card']};
  border-radius: 6px 36px;

  padding: 0 1.25rem 1.25rem 1.25rem;

  img {
    width: 7.5rem;
    margin-top: -1.25rem;
  }

  strong {
    font-family: 'Baloo 2', cursive;
    font-weight: 800;
    font-size: 1.25rem;
    margin-top: 1rem;
    color: ${props => props.theme['base-subtitle']};
  }

  p {
    font-size: 0.875rem;
    text-align: center;
    margin-top: 0.5rem;
  }
`

export const TypeCoffee = styled.div`
  margin-top: 0.75rem;

  span {
    background: ${props => props.theme['yellow-light']};
    color: ${props => props.theme['yellow-dark']};
    font-weight: bold;
    text-transform: uppercase;
    font-size: 0.63rem;

    padding: 0.28rem 0.5rem;
    border-radius: 9999px;
    margin-left: 0.5rem;
  }
`

export const PriceAndQuantity = styled.div`
  margin-top: 2.3rem;
  width: 100%;

  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 1.4rem;
`

export const Price = styled.div`
  span {
    font-size: 0.9rem;
    margin-right: 0.3rem;
  }

  strong {
    font-size: 1.5rem;
  }
`

export const InputQuantity = styled.div`
  display: flex;
  gap: 0.5rem;

  div {
    background: ${props => props.theme['base-input']};
    border-radius: 6px;
    padding: 0.2rem 0.8rem;

    display: flex;
    align-items: center;

    > button {
      background: none;
      color: ${props => props.theme['purple']};
      font-size: 1.3rem;
      line-height: 0;
      padding: 0;
    }

    > input {
      border: none;
      width: 2rem;
      text-align: center;
      background: none;
      line-height: 0;
    }
  }

  button {
    border: none;
    background: ${props => props.theme['purple-dark']};
    color: ${props => props.theme['purple-light']};
    line-height: 0;
    padding: 0.4rem;
    border-radius: 6px;
    cursor: pointer;

    transition: filter 0.2s;

    &:hover {
      filter: brightness(0.8);
    }
  }
`
