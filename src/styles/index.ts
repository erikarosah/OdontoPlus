import { createGlobalStyle } from 'styled-components';
 
const GlobalStyle = createGlobalStyle`
   :root {
      font-size: 62.5%;

      --var-blue: #2C479E;
      --var-text: #153B5F;
    }

  body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    list-style: none;
    text-decoration: none;
    scroll-behavior: smooth;
    font-family: 'Roboto', sans-serif;
  }

  li {
    list-style: none;
    cursor: pointer;
  }

  a {
    text-decoration: none;
  }

  button {
    cursor: pointer;
    border: none;
  }
`;
 
export default GlobalStyle;