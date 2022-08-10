import styled from 'styled-components'

export const LocationContainer = styled.div`
  background: ${props => props.theme['purple-light']};
  border-radius: 6px;
  padding: 0.5rem;

  a {
    display: flex;
    gap: 0.4rem;

    span {
      color: ${props => props.theme['purple-dark']};
      font-size: 0.875rem;
    }

    svg {
      color: ${props => props.theme['purple']};
    }
  }
`
