import "@/styles/globals.css";
import { RecoilRoot } from "recoil";

const MyApp = ({ Component, pageProps }) => (
  <RecoilRoot>
    <Component {...pageProps} />
  </RecoilRoot>
);

export default MyApp;
