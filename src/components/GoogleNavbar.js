import googleTabs from "@/data/googleTabs";
import inputHandler from "@/helpers/inputHandler";
import searchHandler from "@/helpers/searchHandler";
import { userInputState } from "@/store";
import Link from "next/link";
import { useRouter } from "next/router";
import { useRecoilValue } from "recoil";
import GoogleLogo from "./GoogleLogo";

const GoogleNavbar = ({ destination = "" }) => {
  const router = useRouter();
  const { input } = router.query;
  const tabs = googleTabs(input);
  const inputValue = useRecoilValue(userInputState);
  const activePath = tabs.find((tab) => tab?.uri === router.asPath);

  return (
    <nav className="px-4 py-5 flex flex-col gap-4">
      <div>
        <Link href="/">
          <h1 className="text-4xl font-bold cursor-pointer text-center">
            <GoogleLogo />
          </h1>
        </Link>
      </div>
      <div>
        <input
          type="text"
          name="search"
          id="search"
          autoComplete="off"
          placeholder="Search"
          className="w-full lg:w-[60%] xl:w-[40%] 2xl:w-[30%] bg-slate-50 dark:bg-slate-700 px-6 py-2 rounded-full outline-none text-base md:text-lg"
          defaultValue={inputValue ? inputValue : input?.split("+")?.join(" ")}
          onChange={searchHandler}
          onKeyDown={(e) => inputHandler(e, destination)}
        />
      </div>
      <div>
        <div className="bg-transparent flex justify-between gap-2 overflow-x-auto w-full py-1 px-0 menu-tabs">
          {tabs.map(({ uri, title, Icon }, index) => (
            <Link href={uri} key={index}>
              <a
                className={`px-3 py-[3px] border dark:border-opacity-30 dark:border-slate-300 bg-slate-50 dark:bg-slate-800 rounded-full text-slate-700 border-slate-300 dark:text-slate-200 flex gap-2 items-center ${
                  activePath?.uri === uri
                    ? "dark:!bg-slate-50 !bg-slate-800 dark:!text-slate-900 !text-slate-200"
                    : ""
                }`}
              >
                <span
                  className={`text-sky-500 dark:text-sky-400 font-semibold ${
                    activePath?.uri === uri
                      ? "dark:!text-sky-600 text-sky-400"
                      : ""
                  }`}
                >
                  {<Icon size={15} />}
                </span>
                <span>{title}</span>
              </a>
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default GoogleNavbar;
