import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
function PopularMovies() {
  const base_url = "https://media.themoviedb.org/t/p/w220_and_h330_face";
  const defaultImage =
    "https://imgs.search.brave.com/gV6Xy99WsNTWpgT2KUNxopKhP45u8QMrrL2DGi5HYxg/rs:fit:500:0:0/g:ce/aHR0cHM6Ly90NC5m/dGNkbi5uZXQvanBn/LzAyLzE1Lzg0LzQz/LzM2MF9GXzIxNTg0/NDMyNV90dFg5WWlJ/SXllYVI3TmU2RWFM/TGpNQW15NEd2UEM2/OS5qcGc";

  const [popularMovies, setpopularMovies] = useState();
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
      "https://api.themoviedb.org/3/movie/popular?language=en-US&page=1",
      options
    );
    const data = await response.json();
    setpopularMovies(data.results);
  }
  useEffect(() => {
    fetchData();
  }, []);
  return (
    <div className="flex flex-wrap px-28 gap-8 py-10">
      {popularMovies?.map((item) => (
        <div key={item.id} className="rounded-lg">
          <Link to={`/movie/${item.id}`}>
            <div className="w-[190px] h-[374px]  gap-5 cursor-pointer shadow-md pb-2 relative">
              <div className="w-full">
                <img
                  src={
                    item.poster_path
                      ? `${base_url}${item.poster_path}`
                      : defaultImage
                  }
                  className="h-[280px] w-full object-contain rounded-md"
                  alt=""
                />
              </div>
              <div className="pt-2 px-2">
                <div className="absolute bottom-[75px] left-2.5 bg-black rounded-full font-bold p-1">
                  <div className="w-[30px] h-[30px]">
                    <CircularProgressbar
                      value={item.vote_average * 10} // Assuming rating is on a scale of 0 to 10
                      text={`${Math.trunc(item.vote_average * 10)}%`}
                      styles={buildStyles({
                        backgroundColor: "black",
                        textColor: "#FFF", // White text color
                        pathColor: "#FFD700", // Gold path color
                        trailColor: "transparent", // Transparent trail color
                        textSize: "32px",
                      })}
                    />
                  </div>
                </div>
                <p className="font-bold line-clamp-2 my-2">{item.title}</p>
                <p className="font-light">{item.release_date}</p>
              </div>
            </div>
          </Link>
        </div>
      ))}
    </div>
  );
}
export default PopularMovies;
