import { isDark } from "@/store";
import Head from "next/head";
import { useEffect } from "react";
import { BsFillMoonFill, BsFillSunFill } from "react-icons/bs";
import { useRecoilState } from "recoil";

const Layouts = ({ children, title }) => {
  const [darkMode, setDarkMode] = useRecoilState(isDark);
  const themeHandler = () => setDarkMode(!darkMode);

  useEffect(() => {
    const html = document.querySelector("html");
    darkMode ? html.classList.add("dark") : html.classList.remove("dark");
  }, [darkMode]);

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
          {darkMode ? (
            <BsFillSunFill size={25} />
          ) : (
            <BsFillMoonFill size={25} />
          )}
        </button>
        {children}
      </div>
    </>
  );
};

export default Layouts;
