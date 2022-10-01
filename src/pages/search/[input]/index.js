import { GOOGLE_API_SEARCH, X_RapidAPI_KEY } from "@/config";
import googleWord from "@/data/googleWord";
import googleTabs from "@/data/googleTabs";
import Layouts from "@/layouts";
import axios from "axios";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

const { get } = axios;

const Search = () => {
  const router = useRouter();
  const { input } = router.query;

  const tabs = googleTabs(input);

  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [inputValue, setInputValue] = useState("");

  const searchHandler = (e) => setInputValue(e.target.value);

  const submitHandler = (e) => {
    e.preventDefault();

    if (inputValue.length === 0) return;
    router.push(`/search/${inputValue.split(" ").join("+")}`);
    setIsLoading(true);
  };

  const getData = (input) => {
    const config = {
      headers: {
        "X-RapidAPI-Key": X_RapidAPI_KEY,
      },
    };

    get(`${GOOGLE_API_SEARCH}/q=${input}`, config).then((res) => {
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
              {googleWord.map(({ color, word }, index) => (
                <span
                  className={`text-${color}-600 dark:text-${color}-500`}
                  key={index}
                >
                  {word}
                </span>
              ))}
            </h1>
          </Link>
        </div>
        <div>
          <form
            onSubmit={submitHandler}
            className="w-full lg:w-[60%] xl:w-[40%] 2xl:w-[30%]"
          >
            <input
              type="text"
              name="search"
              id="search"
              className="w-full bg-slate-300 dark:bg-slate-700 px-6 py-2 rounded-full outline-none text-base md:text-lg"
              placeholder="Search"
              value={inputValue ? inputValue : input?.split("+")?.join(" ")}
              onChange={searchHandler}
              autoComplete="off"
            />
          </form>
        </div>
        <div>
          <div className="bg-transparent flex justify-between gap-2 overflow-x-auto w-full py-1 px-0 menu-tabs">
            {tabs.map(({ uri, title, Icon }, index) => (
              <Link href={uri} key={index}>
                <a className="px-3 py-[3px] border dark:border-opacity-30 dark:border-slate-300 rounded-full dark:!text-slate-200 flex gap-2 items-center">
                  <span className="dark:text-sky-400">
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
          <h1>Loading...</h1>
        ) : (
          <>
            {data?.results?.map((data, index) => (
              <div
                key={index}
                className="mb-6 dark:bg-slate-700 p-4 rounded-md shadow-lg dark:shadow-gray-900"
              >
                <p className="text-sm mb-2">{data?.cite?.domain}</p>
                <Link href={data.link}>
                  <a className="inline-block text-2xl mb-2 font-semibold">
                    {data.title}
                  </a>
                </Link>
                <p className="text-sm">{data.description}</p>
              </div>
            ))}
          </>
        )}
      </div>
    </Layouts>
  );
};

export default Search;
