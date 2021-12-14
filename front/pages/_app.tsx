import "bootstrap/dist/css/bootstrap.css";
import { Container, Row, Col } from "react-bootstrap";

import type { AppProps } from "next/app";

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

export default MyApp;
