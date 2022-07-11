import { createGlobalStyle } from "styled-components";
import { normalize } from "styled-normalize";

const GlobalStyles = createGlobalStyle`
  ${normalize};
  :root {
    --fs_xxl: 14.4rem;
    --fs_xl: 10.8rem;
    --fs_700: 4.8rem;
    --fs_600: 3.2rem;
    --fs_500: 2.4rem;
    --fs_300: 1.6rem;
    
    --space_xxl: 36rem;
    --space_xl: 24rem;
    --space_800: 9.6rem;
    --space_700: 6.4rem;
    --space_600: 4.8rem;
    --space_500: 3.2rem;
    --space_400: 2.4rem;
    --space_300: 1.6rem;
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
    font-family: 'Helvetica', sans-serif;
    letter-spacing: -0.04em;
    font-weight: 400;
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
  .iText {
    font-style: italic;
  }

  @media ${(props) => props.theme.breakpoints.xxxl} {
    :root {
      --fs_xl: 9rem;
      --fs_700: 3.2rem;
      --fs_600: 2.4rem;
      --fs_500: 2rem;
      --fs_300: 1.6rem;
    }
  }
  @media ${(props) => props.theme.breakpoints.xl} {
    :root {
      --space_800: 7.2rem;
      --fs_xl: 7.2rem;
  }
  }
  @media ${(props) => props.theme.breakpoints.lg} {
    :root {
      --fs_xl: 6rem;
      --fs_700: 2.4rem;
      --fs_600: 2rem;
      --fs_500: 1.6rem;
      --fs_300: 1.2rem;
      --fs_xxl: 10.8rem;
      
      --space_800: 6rem;
      --space_600: 3.2rem;
    }
  }
  @media ${(props) => props.theme.breakpoints.sm} {
    :root {
      --fs_xl: 4.2rem;
      --fs_xxl: 7.2rem;

      --space_xxl: 24rem;
      --space_800: 4.8rem;
    }
}
`;

export default GlobalStyles;
