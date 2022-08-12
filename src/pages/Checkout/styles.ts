import styled from 'styled-components'

export const CheckoutContainer = styled.main`
  margin-top: 2.5rem;

  display: flex;
  flex-direction: column-reverse;

  gap: 2rem;

  @media (min-width: 1080px) {
    display: grid;
    grid-template-columns: 2fr 1fr;
  }
`

export const InfoAddress = styled.div`
  h2 {
    margin-bottom: 1rem;
    font-size: 1.125rem;
  }
`
export const InfoSummary = styled.div`
  h2 {
    margin-bottom: 1rem;
    font-size: 1.125rem;
  }

  grid-row-start: 1;

  @media (min-width: 1080px) {
    grid-column-start: 2;
    grid-row-start: 1;
  }
`
