import styled from 'styled-components'

export const CheckoutContainer = styled.main`
  margin-top: 2.5rem;

  display: grid;
  grid-template-columns: 1fr;
  gap: 2rem;

  @media (min-width: 1080px) {
    grid-template-columns: 2fr 1fr;
  }
`

export const InfoContainer = styled.div`
  h2 {
    font-size: 1.125rem;
  }
`

export const Summary = styled.aside`
  //border: 1px solid black;
`

export const SectionAddress = styled.section`
  background: ${props => props.theme['base-card']};
  border-radius: 6px;
  padding: 2.5rem;
  margin-top: 1rem;

  .aderressInfo {
    display: flex;
    gap: 0.7rem;

    i {
      color: ${props => props.theme['yellow-dark']};
    }

    span {
      display: block;
      font-size: 0.875rem;
    }
  }

  form {
    margin-top: 2rem;

    display: flex;
    flex-direction: column;
    gap: 0.75rem;

    input {
      width: 100%;
      padding: 0.75rem;
      background: ${props => props.theme['base-input']};
      border: 1px solid ${props => props.theme['base-button']};
      border-radius: 4px;

      &::placeholder {
        font-size: 0.875rem;
      }
    }

    @media (min-width: 720px) {
      display: grid;
      //grid-template-rows: repeat (4, 1fr);
      grid-template-columns: 3fr 4fr 1fr;
      gap: 0.8rem;

      #cep {
        grid-row-start: 1;
        grid-column-start: 1;
        grid-row-end: 2;
        grid-column-end: 2;
      }

      #road {
        grid-row-start: 2;
        grid-column-start: 1;
        grid-row-end: 3;
        grid-column-end: 4;
      }

      #number {
        grid-row-start: 3;
        grid-column-start: 1;
        grid-row-end: 4;
        grid-column-end: 2;
      }

      #complement {
        grid-row-start: 3;
        grid-column-start: 2;
        grid-row-end: 4;
        grid-column-end: 4;
      }

      #district {
        grid-row-start: 4;
        grid-column-start: 1;
        grid-row-end: 5;
        grid-column-end: 2;
      }

      #city {
        grid-row-start: 4;
        grid-column-start: 2;
        grid-row-end: 5;
        grid-column-end: 3;
      }

      #uf {
        grid-row-start: 4;
        grid-column-start: 3;
        grid-row-end: 5;
        grid-column-end: 4;
      }
    }
  }
`

export const SectionPayment = styled.section``
