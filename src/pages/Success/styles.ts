import styled from 'styled-components'

export const SuccessContainer = styled.main`
  margin-top: 2.5rem;

  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  flex-wrap: wrap;

  img {
    width: 20rem;
    margin-top: 1rem;

    @media (min-width: 720px) {
      width: 30rem;
    }
  }

  aside {
    h1 {
      font-size: 2rem;
      color: ${props => props.theme['yellow-dark']};
      line-height: 140%;
    }

    > span {
      font-size: 1.25rem;
      color: ${props => props.theme['base-subtitle']};
      display: inline-block;
      margin-bottom: 2.5rem;
    }

    > div {
      background: linear-gradient(
            ${props => props.theme['background']},
            ${props => props.theme['background']}
          )
          padding-box,
        linear-gradient(
            to right,
            ${props => props.theme['yellow']},
            ${props => props.theme['purple']}
          )
          border-box;

      border: 1px solid transparent;
      border-radius: 6px 36px;
      padding: 2.5rem;

      i {
        display: flex;
        width: 2rem;
        height: 2rem;
        justify-content: center;
        align-items: center;
        border-radius: 16px;
        color: ${props => props.theme['white']};
        margin-right: 0.75rem;
      }
    }
  }
`

export const AddressDelivery = styled.div`
  display: flex;
  margin-bottom: 1.5rem;

  i {
    background: ${props => props.theme['purple']};
  }
`

export const DeliveryTime = styled.div`
  display: flex;
  margin-bottom: 1.5rem;

  i {
    background: ${props => props.theme['yellow']};
  }

  div {
    display: flex;
    flex-direction: column;
  }
`

export const FormOfPayment = styled.div`
  display: flex;

  i {
    background: ${props => props.theme['yellow-dark']};
  }

  div {
    display: flex;
    flex-direction: column;
  }
`
