import { useEffect } from "react";
import initOneSignal from "../utils/initOneSignal"; // Adjust the path as necessary

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    initOneSignal();
  }, []);

  return <Component {...pageProps} />;
}

export default MyApp;
