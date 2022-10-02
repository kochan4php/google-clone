import GoogleLogo from "@/components/GoogleLogo";
import { GOOGLE_API_SEARCH } from "@/config";
import configAPI from "@/config/configAPI";
import googleTabs from "@/data/googleTabs";
import searchHandler from "@/helpers/searchHandler";
import submitHandler from "@/helpers/submitHandler";
import Layouts from "@/layouts";
import { loadingState, userInputState } from "@/store";
import axios from "axios";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { useRecoilState, useRecoilValue } from "recoil";

const { get } = axios;

const Search = () => {
  const router = useRouter();
  const { input } = router.query;
  const tabs = googleTabs(input);
  const [data, setData] = useState([]);
  const inputValue = useRecoilValue(userInputState);
  const [isLoading, setIsLoading] = useRecoilState(loadingState);

  const getData = (input) => {
    get(`${GOOGLE_API_SEARCH}/q=${input}`, configAPI).then((res) => {
      if (res.status == 200) {
        if (res.data?.success !== false) {
          setData(res.data);
          setTimeout(() => {
            setIsLoading(false);
          }, 2000);
        }
      }
    });
  };

  useEffect(() => {
    getData(input ? input : inputValue);
  }, [input]);

  return (
    <Layouts title={`${input?.split("+")?.join(" ")} - Penelusuran Google`}>
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
            className="w-full lg:w-[60%] xl:w-[40%] 2xl:w-[30%] bg-slate-50 dark:bg-slate-700 px-6 py-2 rounded-full outline-none text-base md:text-lg"
            placeholder="Search"
            defaultValue={
              inputValue ? inputValue : input?.split("+")?.join(" ")
            }
            onChange={searchHandler}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                submitHandler(e);
                e.target.blur();
              }
            }}
            autoComplete="off"
          />
        </div>
        <div>
          <div className="bg-transparent flex justify-between gap-2 overflow-x-auto w-full py-1 px-0 menu-tabs">
            {tabs.map(({ uri, title, Icon }, index) => (
              <Link href={uri} key={index}>
                <a className="px-3 py-[3px] border dark:border-opacity-30 dark:border-slate-300 bg-slate-50 dark:bg-slate-800 rounded-full text-slate-700 border-slate-300 dark:!text-slate-200 flex gap-2 items-center">
                  <span className="text-sky-500 dark:text-sky-400">
                    {<Icon size={15} />}
                  </span>
                  <span>{title}</span>
                </a>
              </Link>
            ))}
          </div>
        </div>
      </nav>
      <div className="container px-4 overflow-y-auto">
        {isLoading ? (
          <div className="mb-4 bg-gray-50 shadow-slate-400 dark:bg-gray-700 p-4 rounded-md shadow dark:shadow-md dark:shadow-gray-900">
            <h1>Loading...</h1>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-3">
            {data?.results?.map((data, index) => (
              <div
                key={index}
                className="bg-gray-50 shadow-slate-400 dark:bg-gray-700 p-4 rounded-md shadow dark:shadow-md dark:shadow-gray-900"
              >
                <p className="text-sm mb-2 break-words">
                  {data?.cite?.domain ?? data.link}
                </p>
                <Link href={data.link}>
                  <a className="inline-block text-xl text-blue-600 hover:text-blue-500 dark:text-blue-400 dark:hover:text-blue-300 mb-2 font-semibold">
                    {data.title}
                  </a>
                </Link>
                <p className="text-sm break-words">{data.description}</p>
              </div>
            ))}
          </div>
        )}
      </div>
    </Layouts>
  );
};

export default Search;
