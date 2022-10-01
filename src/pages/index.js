import Layouts from "@/layouts";
import { useRouter } from "next/router";
import { useState } from "react";
import googleWord from "@/data/googleWord";

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
          {googleWord.map((word, index) => (
            <span className="text-slate-800 dark:text-white" key={index}>
              {word}
            </span>
          ))}
        </h1>

        <input
          type="text"
          name="search"
          id="search"
          className="w-full lg:w-[60%] xl:w-[40%] 2xl:w-[30%] bg-slate-300 dark:bg-slate-700 px-6 py-2 rounded-full outline-none text-base md:text-lg"
          placeholder="Search"
          autoComplete="off"
          onChange={searchHandler}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              submitHandler(e);
              e.target.blur();
            }
          }}
        />
      </div>
    </Layouts>
  );
};

export default Home;
