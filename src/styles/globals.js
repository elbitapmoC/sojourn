import { createGlobalStyle } from "styled-components";
import { normalize } from "styled-normalize";

const GlobalStyles = createGlobalStyle`
  ${normalize};

  :root {
    --fs_xl: 10.8rem;
    --fs_700: 4.8rem;
    --fs_600: 3.2rem;
    --fs_500: 2.4rem;
    --fs_400: 2rem;
    --fs_300: 1.6rem;
  }

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
    font-size: var(--fs_300);
    background: ${(props) => props.theme.colors.background1};
    color: ${(props) => props.theme.colors.primary1};
    font-family: 'Lato';
    font-weight: normal;
    cursor: default;
    overflow-x: hidden;
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

  @media ${(props) => props.theme.breakpoints.xxl} {
    :root {
      --fs_xl: 10.8rem;
      --fs_700: 4.8rem;
      --fs_600: 3.2rem;
      --fs_500: 2.4rem;
      --fs_400: 2rem;
      --fs_300: 1.6rem;
    }
  }
  @media ${(props) => props.theme.breakpoints.xl} {
    :root {
      --fs_xl: 10.8rem;
      --fs_700: 4.8rem;
      --fs_600: 3.2rem;
      --fs_500: 2.4rem;
      --fs_400: 2rem;
      --fs_300: 1.6rem;
    }
  }
  @media ${(props) => props.theme.breakpoints.lg} {
    :root {
      --fs_xl: 10.8rem;
      --fs_700: 4.8rem;
      --fs_600: 3.2rem;
      --fs_500: 2.4rem;
      --fs_400: 2rem;
      --fs_300: 1.6rem;
    }
  }
  @media ${(props) => props.theme.breakpoints.md} {
    :root {
      --fs_xl: 10.8rem;
      --fs_700: 4.8rem;
      --fs_600: 3.2rem;
      --fs_500: 2.4rem;
      --fs_400: 2rem;
      --fs_300: 1.6rem;
    }
  }
  @media ${(props) => props.theme.breakpoints.sm} {
    :root {
      --fs_xl: 10.8rem;
      --fs_700: 4.8rem;
      --fs_600: 3.2rem;
      --fs_500: 2.4rem;
      --fs_400: 2rem;
      --fs_300: 1.6rem;
    }
}

`;

export default GlobalStyles;
