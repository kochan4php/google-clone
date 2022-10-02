import GoogleLogo from "@/components/GoogleLogo";
import inputHandler from "@/helpers/inputHandler";
import searchHandler from "@/helpers/searchHandler";
import Layouts from "@/layouts";

const Home = () => (
  <Layouts title="Google Clone" centerLayout>
    <div className="flex flex-col justify-center items-center gap-8 w-full px-4">
      <h1 className="text-7xl md:text-8xl font-bold">
        <GoogleLogo />
      </h1>

      <input
        type="text"
        name="search"
        id="search"
        placeholder="Search"
        autoComplete="off"
        className="w-full lg:w-[60%] xl:w-[40%] 2xl:w-[30%] bg-slate-300 dark:bg-slate-700 px-6 py-2 rounded-full outline-none text-base md:text-lg"
        onChange={searchHandler}
        onKeyDown={inputHandler}
      />
    </div>
  </Layouts>
);

export default Home;
