import "@/styles/globals.css";
import { ReactHooksWrapper, setHook } from "global-react-hooks";
import { useRouter } from "next/router";
import { RecoilRoot } from "recoil";
import RecoilNexus from "recoil-nexus";

setHook("router", useRouter);

const MyApp = ({ Component, pageProps }) => (
  <RecoilRoot>
    <ReactHooksWrapper />
    <RecoilNexus />
    <Component {...pageProps} />
  </RecoilRoot>
);

export default MyApp;
