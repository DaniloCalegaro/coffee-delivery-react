import styled from 'styled-components'

export const LocationContainer = styled.div`
  background: ${props => props.theme['purple-light']};
  border-radius: 6px;
  padding: 0.5rem;

  cursor: pointer;

  transition: filter 0.2s;

  div {
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

  &:hover {
    filter: brightness(0.9);
  }
`
