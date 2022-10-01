import googleWord from "@/data/googleWord";
import searchHandler from "@/helpers/searchHandler";
import submitHandler from "@/helpers/submitHandler";
import Layouts from "@/layouts";

const Home = () => (
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

export default Home;
