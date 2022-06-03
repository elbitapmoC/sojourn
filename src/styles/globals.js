import { createGlobalStyle } from 'styled-components';
import { normalize } from 'styled-normalize';

const GlobalStyles = createGlobalStyle`
  ${normalize};

  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
  html {
    font-size: 62.5%;
    scroll-behavior: smooth;
  }
  body {
    font-family: 'apercu-rg';
    font-size: 1.6rem;
    background: ${props => props.theme.colors.background1};
    color: ${props => props.theme.colors.primary1};
    cursor: default;
  }
  h1,h2,h3,h4,h5,h6,button {
    font-family: ${props => props.theme.fonts.title};
  }
  a {
    text-decoration: none;
  }
  li{
    list-style: none;
  }
  @font-face {
    font-family: 'apercu-rg';
    src: url('./fonts/apercu_rg.otf') format('otf');
    font-style: normal;
    font-weight: 400;
    font-display: swap;
  }
  @font-face {
    font-family: 'apercu-bd';
    src: url('./fonts/apercu_bd.otf') format('otf');
    font-style: bold;
    font-weight: 700;
    font-display: swap;
  }
  @font-face {
    font-family: 'gallient';
    src: url('./fonts/gallient.ttf') format('ttf');
    font-style: normal;
    font-weight: 400;
    font-display: swap;
  }
`;

export default GlobalStyles;