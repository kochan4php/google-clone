import Layouts from "@/layouts";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import axios from "axios";
import { GOOGLE_API_SEARCH, X_RapidAPI_KEY } from "@/config";

const { get } = axios;

const Search = () => {
  const router = useRouter();
  const { input } = router.query;

  const [data, setData] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const searchHandler = (e) => setInputValue(e.target.value);

  const submitHandler = (e) => {
    e.preventDefault();
    if (inputValue.length === 0) return;
    router.push(`/search/${inputValue.split(" ").join("+")}`);
  };

  const getData = async (input) => {
    const res = await get(`${GOOGLE_API_SEARCH}/q=${input}`, {
      headers: {
        "X-RapidAPI-Key": X_RapidAPI_KEY,
      },
    });
    console.log(res.data);
  };

  useEffect(() => {
    getData(input);
  }, [input]);

  return (
    <Layouts title={`${input?.split("+")?.join(" ")} - Penelusuran Google`}>
      <nav className="px-4 py-5 flex flex-col gap-4">
        <div>
          <Link href="/">
            <h1 className="text-4xl font-bold cursor-pointer">
              <span className="text-sky-600 dark:text-sky-500">G</span>
              <span className="text-red-500 dark:text-red-500">o</span>
              <span className="text-yellow-500 dark:text-yellow-500">o</span>
              <span className="text-sky-600 dark:text-sky-500">g</span>
              <span className="text-green-500 dark:text-green-500">l</span>
              <span className="text-red-500 dark:text-red-500">e</span>
            </h1>
          </Link>
        </div>
        <div>
          <form
            onSubmit={submitHandler}
            className="w-full lg:w-[60%] xl:w-[40%] 2xl:w-[30%]"
          >
            <input
              type="search"
              name="search"
              id="search"
              className="w-full bg-slate-300 dark:bg-slate-700 px-6 py-2.5 rounded-full outline-none text-base md:text-lg"
              placeholder="Search"
              defaultValue={input?.split("+")?.join(" ")}
              onChange={searchHandler}
            />
          </form>
        </div>
      </nav>
      <h1>{input}</h1>
    </Layouts>
  );
};

export default Search;
