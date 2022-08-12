import styled from 'styled-components'

interface ButtonContainerProps {
  seleted: boolean
}

export const ButtonContainer = styled.button<ButtonContainerProps>`
  border: solid 1px
    ${props => (props.seleted ? props => props.theme['purple'] : 'transparent')};
  background: ${props =>
    props.seleted
      ? props => props.theme['purple-light']
      : props => props.theme['base-button']};
  border-radius: 6px;
  padding: 1rem;
  font-size: 0.75rem;
  text-transform: uppercase;
  line-height: 0;

  display: flex;
  align-items: center;
  gap: 0.75rem;

  transition: filter 0.2s;

  svg {
    color: ${props => props.theme['purple']};
  }

  &:hover {
    filter: brightness(0.9);
  }
`
