import GlobalStyle from "../styles";
import { SWRConfig } from "swr";

const fetcher = (...coords) => fetch(...coords).then((res) => res.json());

export default function App({ Component, pageProps }) {
  return (
    <SWRConfig value={{ fetcher, refreshInterval: 5000 }}>
      <GlobalStyle />
      <Component {...pageProps} />
    </SWRConfig>
  );
}
