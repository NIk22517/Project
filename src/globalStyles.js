import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  body {
    margin: 0;
    padding: 0;
    font-family: sans-serif;
  }
  a{
    text-decoration: none;
    color: black;
    font-family: sans-serif;
  }
  button{
    font-family: sans-serif;
  }
`;

export default GlobalStyle;
