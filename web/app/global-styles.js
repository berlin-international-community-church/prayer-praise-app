import { injectGlobal } from 'styled-components';

/* eslint no-unused-expressions: 0 */
injectGlobal`
  html,

  body {
    height: 100%;
    width: 100%;
    margin: 0;
    padding: 0;
    font-family: 'Roboto Condensed', Arial, sans-serif;
  }

  #app {
    background-color: #FFFFFF;
    min-height: 100%;
    min-width: 100%;
    display: flex;
  }

  h1, h2, h3, h4, h5 {
    font-family: 'Bitter', serif;
  }
`;
