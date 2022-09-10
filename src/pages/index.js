import Layouts from "@/layouts";

const Home = () => {
  return (
    <Layouts title="Google Clone">
      <div className="flex flex-col justify-center items-center gap-8 w-full px-4">
        <h1 className="text-8xl font-bold">
          <span className="text-sky-600 dark:text-sky-500">G</span>
          <span className="text-red-600 dark:text-red-500">o</span>
          <span className="text-yellow-600 dark:text-yellow-500">o</span>
          <span className="text-sky-600 dark:text-sky-500">g</span>
          <span className="text-green-600 dark:text-green-500">l</span>
          <span className="text-red-600 dark:text-red-500">e</span>
        </h1>

        <input
          type="search"
          name="search"
          id="search"
          className="w-full md:w-[30%] bg-slate-300 dark:bg-slate-700 px-6 py-4 rounded-full outline-none text-base md:text-lg"
        />
      </div>
    </Layouts>
  );
};

export default Home;
