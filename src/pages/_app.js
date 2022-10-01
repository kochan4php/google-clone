import "@/styles/globals.css";
import { RecoilRoot } from "recoil";
import RecoilNexus from "recoil-nexus";
import { ReactHooksWrapper, setHook } from "global-react-hooks";
import { useRouter } from "next/router";

setHook("router", useRouter);

const MyApp = ({ Component, pageProps }) => (
  <RecoilRoot>
    <ReactHooksWrapper />
    <RecoilNexus />
    <Component {...pageProps} />
  </RecoilRoot>
);

export default MyApp;
