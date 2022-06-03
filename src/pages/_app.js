// import Theme from '../styles/theme';
import { createGlobalStyle } from "styled-components";


const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: 'apercu-rg';
    src: url('/fonts/apercu_rg.otf') format('otf');
    font-style: normal;
    font-weight: 400;
    font-display: swap;
  }
  @font-face {
    font-family: 'apercu-bd';
    src: url('/fonts/apercu_bd.otf') format('otf');
    font-style: bold;
    font-weight: 700;
    font-display: swap;
  }
  @font-face {
    font-family: 'gallient';
    src: url('/fonts/gallient.ttf') format('ttf');
    font-style: normal;
    font-weight: 400;
    font-display: swap;
  }
`;
function App({ Component, pageProps }) {
  return (
    <>
      {/* <Theme> */}
        <GlobalStyle />
        <Component {...pageProps} />
      {/* </Theme> */}
    </>
  );
}
 
export default App