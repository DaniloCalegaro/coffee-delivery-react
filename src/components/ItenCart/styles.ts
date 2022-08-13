import styled from 'styled-components'

export const ItenCardContainer = styled.div`
  display: flex;
  flex-direction: column;

  > div {
    display: grid;
    grid-template-columns: 1fr 2fr 2fr;
    grid-template-rows: repeat(2, 1fr);

    img {
      grid-row-start: 1;
      grid-column-start: 1;
      grid-row-end: 3;
      grid-column-end: 2;

      width: 4rem;
      margin-right: 1.25rem;
    }

    span {
      grid-row-start: 1;
      grid-column-start: 2;
      grid-row-end: 2;
      grid-column-end: 4;
    }

    strong {
      grid-row-start: 2;
      grid-column-start: 2;
      grid-row-end: 3;
      grid-column-end: 4;

      text-align: end;
      margin-left: 2rem;
    }

    > button {
      grid-row-start: 3;
      grid-column-start: 3;
      grid-row-end: 4;
      grid-column-end: 4;

      width: 95%;
      display: inline-block;
      background: ${props => props.theme['base-button']};
      border: none;
      border-radius: 6px;
      text-transform: uppercase;
      font-size: 0.75rem;

      padding: 0.4rem;

      cursor: pointer;

      display: flex;
      justify-content: center;
      align-items: center;
      gap: 0.25rem;

      transition: filter 0.2s;

      svg {
        color: ${props => props.theme['purple']};
      }

      &:hover {
        filter: brightness(0.9);
      }
    }

    .input {
      grid-row-start: 3;
      grid-column-start: 2;
      grid-row-end: 4;
      grid-column-end: 3;

      margin-right: 0.5rem;

      div {
        height: 100%;
      }
    }

    @media (min-width: 720px) {
      display: grid;
      grid-template-columns: 1fr 2fr 2fr 1fr;
      grid-template-rows: repeat(2, 1fr);

      img {
        grid-row-start: 1;
        grid-column-start: 1;
        grid-row-end: 3;
        grid-column-end: 2;
      }

      span {
        grid-row-start: 1;
        grid-column-start: 2;
        grid-row-end: 2;
        grid-column-end: 4;
      }

      strong {
        grid-row-start: 1;
        grid-column-start: 4;
        grid-row-end: 2;
        grid-column-end: 5;
      }

      > button {
        grid-row-start: 2;
        grid-column-start: 3;
        grid-row-end: 3;
        grid-column-end: 4;
      }

      .input {
        grid-row-start: 2;
        grid-column-start: 2;
        grid-row-end: 3;
        grid-column-end: 3;
      }
    }
  }

  &::after {
    content: '';
    width: 100%;
    margin: 1.5rem 0;
    border-top: 1px solid ${props => props.theme['base-button']};
  }
`
