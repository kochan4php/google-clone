import { googleTheme } from "@/store";
import Head from "next/head";
import { useEffect } from "react";
import { useRecoilState } from "recoil";

const Layouts = ({ children, title }) => {
  const [theme, setTheme] = useRecoilState(googleTheme);
  const themeHandler = () => setTheme(theme === "dark" ? "light" : "dark");

  useEffect(() => {
    theme === "dark"
      ? document.querySelector("html").classList.add("dark")
      : document.querySelector("html").classList.remove("dark");
  }, [theme]);

  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>
      <div className="min-h-screen w-full flex justify-center items-center dark:bg-slate-900 dark:text-white transition-all duration-200">
        <button
          onClick={themeHandler}
          className="absolute px-4 py-2 rounded right-10 bottom-10 bg-sky-500 dark:bg-sky-700 focus:ring-4 focus:ring-sky-500 transition-all duration-200"
        >
          Theme
        </button>
        {children}
      </div>
    </>
  );
};

export default Layouts;
