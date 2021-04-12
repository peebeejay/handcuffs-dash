import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  html {
    overflow: hidden;
    height: 100%;
  }

  body {
    margin: 0;
    font-family: 'Poppins', sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    margin: 0;
    height: 100%;
    overflow: auto;
    font-size: 0.875rem
  }

  a {
    text-decoration: none;
  }
`;
