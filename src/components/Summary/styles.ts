import styled from 'styled-components'

export const SummaryContainer = styled.aside`
  background: ${props => props.theme['base-card']};
  border-radius: 0.375rem 2.75rem;
  padding: 2.5rem;

  .sums {
    display: grid;
    grid-template-columns: 1fr 1fr;

    strong {
      text-align: end;
      font-weight: 400;
      margin-bottom: 0.75rem;

      &:last-of-type {
        font-weight: bold;
        font-size: 1.25rem;
      }
    }

    span {
      font-size: 0.875rem;

      &:last-of-type {
        font-weight: bold;
        font-size: 1.25rem;
      }
    }

    button {
      grid-row-start: 4;
      grid-column-start: 1;
      grid-row-end: 5;
      grid-column-end: 3;

      background: ${props => props.theme['yellow-dark']};
      color: ${props => props.theme['white']};
      border: none;
      padding: 0.75rem;
      margin-top: 1.5rem;
      border-radius: 6px;

      font-size: 0.875rem;
      text-transform: uppercase;
    }
  }
`
