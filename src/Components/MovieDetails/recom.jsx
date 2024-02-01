import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
function Recommandation({ path }) {
  console.log(path);
  const base_url = "https://media.themoviedb.org/t/p/w250_and_h141_face";
  const defaultImage =
    "https://imgs.search.brave.com/gV6Xy99WsNTWpgT2KUNxopKhP45u8QMrrL2DGi5HYxg/rs:fit:500:0:0/g:ce/aHR0cHM6Ly90NC5m/dGNkbi5uZXQvanBn/LzAyLzE1Lzg0LzQz/LzM2MF9GXzIxNTg0/NDMyNV90dFg5WWlJ/SXllYVI3TmU2RWFM/TGpNQW15NEd2UEM2/OS5qcGc";

  const [recom, setRecom] = useState([]);
  async function fetchData() {
    const options = {
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmYzQxMmU4YTIzZTdhNjA3ZmEzOGZmYzE4ZjMwMmRmOSIsInN1YiI6IjY1YWZkNTEyNjdiNjEzMDBhZmYwYTYwYyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Q26i66D6UDNHaJIdSnCDEHcPjZj8Qh6QBLiZi0Th9B4",
      },
    };
    try {
      const response = await fetch(
        `https://api.themoviedb.org/3${path}/recommendations`,
        options
      );
      const data = await response.json();
      setRecom(data.results);
      console.log("recom", data.results);
    } catch (error) {
      alert(error);
    }
  }

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="pl-28 pb-4">
      <div className="font-semibold text-xl">Recommendations</div>
      <div
        className="flex flex-nowrap gap-4 text-base overflow-x-auto"
        key={`${path}${recom.length}`}
      >
        {recom.length > 0 ? (
          recom.map((item) => (
            <div key={item.id} className="w-[250px] min-w-[250px] shadow-lg">
              {item.media_type === "tv" && (
                <Link to={`/tv/${item.id}`}>
                  <div>
                    <img
                      src={
                        item?.backdrop_path
                          ? `${base_url}${item.backdrop_path}`
                          : defaultImage
                      }
                      alt=""
                      className="w-[250px] h-[141px] object-contain rounded-md"
                    />
                  </div>
                  <div className="flex justify-between">
                    <p className="line-clamp-1">{item.name}</p>
                    <p>{item.vote_average}</p>
                  </div>
                </Link>
              )}
              {item.media_type === "movie" && (
                <Link to={`/movie/${item.id}`}>
                  <div>
                    <img
                      src={
                        item?.backdrop_path
                          ? `${base_url}${item.backdrop_path}`
                          : defaultImage
                      }
                      alt=""
                      className="w-[250px] h-[141px] object-contain rounded-md"
                    />
                  </div>
                  <div className="flex justify-between">
                    <p className="line-clamp-1">{item.name}</p>
                    <p>{item.vote_average}</p>
                  </div>
                </Link>
              )}
            </div>
          ))
        ) : (
          <div>There are no recommendations</div>
        )}
      </div>
    </div>
  );
}

export default Recommandation;
