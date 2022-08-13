import styled from 'styled-components'

export const InputAmountContainer = styled.div`
  background: ${props => props.theme['base-input']};
  border-radius: 6px;
  padding: 0.2rem 0.8rem;

  display: flex;
  align-items: center;
  justify-content: space-between;

  button {
    color: ${props => props.theme['purple']};
    font-size: 1.3rem;
    line-height: 0;
    padding: 0;
    cursor: pointer;
  }

  input {
    border: none;
    width: 2rem;
    text-align: center;
    background: none;
    line-height: 0;
  }
`
