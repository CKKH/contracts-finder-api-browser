import "../styles/globals.css";

// Remove if using a different component library
import "antd/dist/antd.css";

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}

export default MyApp;
