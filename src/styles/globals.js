import { createGlobalStyle } from "styled-components";
import { normalize } from "styled-normalize";
import "tailwindcss/base";
import "tailwindcss/components";
import "tailwindcss/utilities";

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
    font-size: 1.6rem;
    background: ${(props) => props.theme.colors.background1};
    color: ${(props) => props.theme.colors.primary1};
    font-family: 'Lato';
    font-weight: normal;
    cursor: default;
  }
  h1,h2,h3,h4,h5,h6,button {
    font-family: ${(props) => props.theme.fonts.title};
  }
  a {
    text-decoration: none;
  }
  li{
    list-style: none;
  }
  .emphText {
    color: ${(props) => props.theme.colors.brightRed};
  }
`;

export default GlobalStyles;
