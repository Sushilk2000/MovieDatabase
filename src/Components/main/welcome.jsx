import { useRef } from "react";
import { useNavigate } from "react-router-dom";
function Welcome() {
  const searchRef = useRef();
  const nav = useNavigate();
  function handleSubmit(e) {
    e.preventDefault();
    const query = searchRef.current && searchRef.current.value;
    if (query) {
      nav(`/search?query=${query}`);
    }
  }
  return (
    <div className="relative w-full min-h-[350px] py-16 flex flex-col text-white gap-16">
      <div className="absolute inset-0 bg-[url(https://images3.alphacoders.com/273/273555.jpg)] bg-cover bg-no-repeat before:absolute before:inset-0 before:bg-blue-800 before:opacity-30"></div>
      <div className="w-full pl-8 relative z-10">
        <p className="text-5xl font-bold">Welcome.</p>
        <p className="text-3xl font-semibold">
          Millions of movies, TV shows, and people to discover. Explore now.
        </p>
      </div>
      <div className="flex w-full px-8 items-center relative z-10">
        <form action="Search" className="flex w-full">
          <input
            type="text"
            className="h-12 rounded-l-full pl-6 text-black placeholder:text-gray-600 outline-none rounded-r-full w-full"
            placeholder="Search for a movie, tv show, person....."
            ref={searchRef}
          />
          <button
            className="h-12 w-36 rounded-l-full rounded-r-full -translate-x-16 bg-cyan-500 border"
            onClick={handleSubmit}
          >
            Search
          </button>
        </form>
      </div>
    </div>
  );
}

export default Welcome;
