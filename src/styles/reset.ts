import { createGlobalStyle } from 'styled-components'

export const Reset = createGlobalStyle`
  * {
    box-sizing: border-box;
    font-family: "Roboto", "sans-serif";
    margin: 0;
    padding: 0;
  }
  ol,
  ul {
    list-style: none;
  }
`
