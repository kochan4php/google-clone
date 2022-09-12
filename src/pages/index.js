import Layouts from "@/layouts";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";

const Home = () => {
  const router = useRouter();

  const [inputValue, setInputValue] = useState("");
  const searchHandler = (e) => setInputValue(e.target.value);

  const submitHandler = (e) => {
    e.preventDefault();
    if (inputValue.length === 0) return;
    router.push(`/search/${inputValue.split(" ").join("+")}`);
  };

  return (
    <Layouts title="Google Clone" centerLayout>
      <div className="flex flex-col justify-center items-center gap-8 w-full px-4">
        <h1 className="text-7xl md:text-8xl font-bold">
          <span className="text-sky-600 dark:text-sky-500">G</span>
          <span className="text-red-500 dark:text-red-500">o</span>
          <span className="text-yellow-500 dark:text-yellow-500">o</span>
          <span className="text-sky-600 dark:text-sky-500">g</span>
          <span className="text-green-500 dark:text-green-500">l</span>
          <span className="text-red-500 dark:text-red-500">e</span>
        </h1>

        <form
          onSubmit={submitHandler}
          className="w-full lg:w-[60%] xl:w-[40%] 2xl:w-[30%]"
        >
          <input
            type="search"
            name="search"
            id="search"
            className="w-full bg-slate-300 dark:bg-slate-700 px-6 py-2 rounded-full outline-none text-base md:text-lg"
            placeholder="Search"
            onChange={searchHandler}
          />
        </form>
      </div>
    </Layouts>
  );
};

export default Home;
