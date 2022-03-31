import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  html {
    scroll-behavior: smooth;
  }

  #__next,
  html, 
  body {
    margin: 0 20px;
    padding: 0;
    border: 0;

    height: 100%;

    font-family: Arial, Helvetica, sans-serif;
    text-align: center;
  }

  * {
    outline: none;
    box-sizing: border-box;
    -webkit-font-smoothing: antialiased;
  }
 
`;
