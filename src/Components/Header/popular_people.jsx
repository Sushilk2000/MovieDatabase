import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function PopularPeople() {
  const base_url = "https://media.themoviedb.org/t/p/w138_and_h175_face";
  const defaultImage =
    "https://imgs.search.brave.com/gV6Xy99WsNTWpgT2KUNxopKhP45u8QMrrL2DGi5HYxg/rs:fit:500:0:0/g:ce/aHR0cHM6Ly90NC5m/dGNkbi5uZXQvanBn/LzAyLzE1Lzg0LzQz/LzM2MF9GXzIxNTg0/NDMyNV90dFg5WWlJ/SXllYVI3TmU2RWFM/TGpNQW15NEd2UEM2/OS5qcGc";

  const [people, setPeople] = useState();
  async function fetchData() {
    const options = {
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmYzQxMmU4YTIzZTdhNjA3ZmEzOGZmYzE4ZjMwMmRmOSIsInN1YiI6IjY1YWZkNTEyNjdiNjEzMDBhZmYwYTYwYyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Q26i66D6UDNHaJIdSnCDEHcPjZj8Qh6QBLiZi0Th9B4",
      },
    };
    const response = await fetch(
      `https://api.themoviedb.org/3/person/popular?language=en-US&page=1`,
      options
    );
    const data = await response.json();
    setPeople(data.results);
  }
  useEffect(() => {
    fetchData();
  }, []);
  return (
    <div className="flex flex-wrap gap-6 px-28 py-12">
      {people?.map((item) => (
        <Link to={`/person/${item.id}`}>
          <div
            className="min-w-[140px] w-[240px] pb-2.5 overflow-hidden border border-gray-500  h-[350px]  shadow-lg cursor-pointer rounded-md"
            key={item.id}
          >
            <img
              src={
                item.profile_path !== null
                  ? `${base_url}${item?.profile_path}`
                  : defaultImage
              }
              height={175}
              className="rounded-tl-md rounded-tr-md object-fill w-full min-h-[175px]"
              alt={`${item.name}'s profile`}
            />
            <div className="flex flex-col pb-4 px-2">
              <p className="font-bold">{item.name}</p>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
}
export default PopularPeople;
