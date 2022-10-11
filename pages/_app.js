// add bootstrap css
import "bootstrap/dist/css/bootstrap.css";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
