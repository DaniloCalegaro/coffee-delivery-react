import styled from 'styled-components'

export const HomeContainer = styled.main``

export const IntroSection = styled.section`
  display: grid;
  grid-template-columns: 1fr;
  gap: 3.5rem;

  padding: 5.875rem 0;

  aside {
    strong {
      display: block;
      color: ${props => props.theme['base-subtitle']};
      font-size: 1.25rem;
      line-height: 1.625rem;
      margin-top: 1rem;
    }
  }

  img {
    width: 100%;
    grid-row-start: 1;
  }

  @media (min-width: 1080px) {
    grid-template-columns: 2fr 1fr;

    img {
      width: 27rem;
      grid-column-start: 2;
      grid-row-start: 1;
    }
  }
`
export const QualityList = styled.ul`
  column-count: 1;
  margin-top: 4rem;

  li {
    margin-bottom: 1.25rem;
    display: flex;
    align-items: center;
    gap: 0.75rem;

    i {
      display: flex;
      padding: 0.5rem;
      border-radius: 50%;
      color: ${props => props.theme['white']};
    }
    &:nth-child(1) {
      i {
        background: ${props => props.theme['yellow-dark']};
      }
    }
    &:nth-child(2) {
      i {
        background: ${props => props.theme['yellow']};
      }
    }
    &:nth-child(3) {
      i {
        background: ${props => props.theme['base-text']};
      }
    }
    &:nth-child(4) {
      i {
        background: ${props => props.theme['purple']};
      }
    }
  }

  @media (min-width: 720px) {
    column-count: 2;
  }
`

export const CoffeeListSection = styled.section``
