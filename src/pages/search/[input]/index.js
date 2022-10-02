import GoogleNavbar from "@/components/GoogleNavbar";
import { GOOGLE_API_SEARCH } from "@/config";
import configAPI from "@/config/configAPI";
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
    setIsLoading(true);
    getData(input ? input : inputValue);
  }, [input]);

  return (
    <Layouts title={`${input?.split("+")?.join(" ")} - Penelusuran Google`}>
      <GoogleNavbar />
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
