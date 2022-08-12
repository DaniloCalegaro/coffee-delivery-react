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

export const InfoAddress = styled.div`
  h2 {
    font-size: 1.125rem;
  }
`
export const InfoSummary = styled.div`
  h2 {
    font-size: 1.125rem;
  }

  grid-row-start: 1;

  @media (min-width: 1080px) {
    grid-column-start: 2;
    grid-row-start: 1;
  }
`

export const Summary = styled.aside`
  //border: 1px solid black;
`

export const SectionPayment = styled.section``
