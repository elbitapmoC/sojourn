import Theme from "../styles/theme";
import Head from "next/head";
import "bulma/sass/utilities/_all.sass";
import "bulma/sass/grid/columns.sass";

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
