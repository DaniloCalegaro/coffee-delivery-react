import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
 * { 
  margin: 0;
  padding: 0;
  box-sizing: border-box;
 }

 :focus {
  outline: 0;
  
 }

 body {
  background: ${props => props.theme['background']};
  color: ${props => props.theme['base-text']};
  -webkit-font-smoothing: antialiased;
 }

 body, input, textarea, button {
  font-family: 'Roboto', sans-serif;
  font-weight: 400;
  font-size: 1rem;
  line-height: 130%;
 }

 h1 {
  font-family: 'Baloo 2', cursive;
  font-size: 3rem;
  line-height: 130%;
  font-weight: 800;

  color: ${props => props.theme['base-title']};
 }

 h2 {
  font-family: 'Baloo 2', cursive;
  font-size: 2rem;
  line-height: 130%;
  color: ${props => props.theme['base-subtitle']};
 }

 ul {
  list-style: none;
 }

 a { 
  text-decoration: none;
  color: ${props => props.theme['base-text']};
 }

`
