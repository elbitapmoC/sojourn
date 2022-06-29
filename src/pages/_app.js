import Theme from "../styles/theme";
import Head from "next/head";

function App({ Component, pageProps }) {
  return (
    <>
      <Theme>
        <Head>
          <title>Sojourner LLC</title>
        </Head>
        <Component {...pageProps} />
      </Theme>
    </>
  );
}

export default App;
