import React, { useEffect, useState } from "react";
import MovieResult from "./MovieResult";
import { useLocation, useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { split } from "postcss/lib/list";
function SearchResults() {
  const path = useLocation();
  console.log(path);
  const [results, setResults] = useState([]); // Fix typo in const declaration
  async function fetchData() {
    // const decode = decodeURIComponent(path.search.split("=")[1]);
    // console.log(decode);
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
        `https://api.themoviedb.org/3/search/multi${path.search}}`,
        options
      );
      const data = await response.json();
      setResults(data.results);
      console.log("search", data.results);
    } catch (error) {
      alert(error);
    }
  }

  useEffect(() => {
    fetchData(); // Call fetchData when the component mounts
  }, []); // Add path.pathname as a dependency

  return (
    <>
      <div className="min-h-[75vh]">
        <div className="">
          <input type="text" />
        </div>
        <div className="px-28">
          {results.length > 0 ? (
            results?.map(
              (item) => (
                item.media_type === "movie" && (
                  <Link to={`/movie/${item.id}`} key={item.id}>
                    <MovieResult movie={item} />
                  </Link>
                ),
                item.media_type === "tv" && (
                  <Link to={`/tv/${item.id}`} key={item.id}>
                    <MovieResult movie={item} />
                  </Link>
                )
              )
            )
          ) : (
            <div className="h-[72vh] text-2xl font-semibold px-40 py-20">
              No search result found for query
            </div>
          )}
        </div>
      </div>
      {/* Add your rendering logic for the 'results' state here */}
    </>
  );
}

export default SearchResults;
