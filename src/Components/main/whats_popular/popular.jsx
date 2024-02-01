import { useState, useEffect } from "react";
import Card from "../trending/card";
import { Button, ButtonGroup } from "react-bootstrap";
import { Link } from "react-router-dom";

function Popular() {
  const [onTv, setOnTv] = useState([]);
  const [inTheaters, setInTheaters] = useState([]);
  const [toggle, setToggle] = useState("onTv");
  async function onTvToday() {
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
        "https://api.themoviedb.org/3/tv/airing_today?language=en-US&page=1",
        options
      );
      const data = await response.json();
      setOnTv(data.results);
      console.log("onTv", data); // Use the updated 'data' variable directly
    } catch (error) {
      console.log(error);
    }
  }

  async function inTheatersMovies() {
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
        "https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1",
        options
      );
      const data = await response.json();
      setInTheaters(data.results);
      console.log("week", data); // Use the updated 'data' variable directly
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    inTheatersMovies(); // Call the function here
  }, []);

  useEffect(() => {
    onTvToday(); // Call the function here
  }, []);

  return (
    <div className="bg-[url(https://www.themoviedb.org/assets/2/v4/misc/trending-bg-39afc2a5f77e31d469b25c187814c0a2efef225494c038098d62317d923f8415.svg)] bg-no-repeat bg-bottom pl-11">
      <div className="flex gap-8 font-semibold text-2xl font-serif mt-8 mb-4 items-baseline ">
        <div>Whats's Popular</div>
        <ButtonGroup size="sm" className="mb-2">
          <Button
            className={`btn ${
              toggle === "onTv" ? "btn-primary" : "btn-outline"
            } rounded-l-2xl rounded-r-none`}
            id="trendingToday"
            onClick={() => {
              setToggle("onTv");
            }}
          >
            On TV
          </Button>
          <Button
            className={`btn ${
              toggle === "inTheaters" ? "btn-primary" : "btn-outline"
            } rounded-none rounded-r-2xl`}
            id="trendingWeek"
            onClick={() => {
              setToggle("inTheaters");
            }}
          >
            In Theaters
          </Button>
        </ButtonGroup>
      </div>
      <div>
        <div className="flex flex-nowrap overflow-x-auto gap-5">
          {toggle === "onTv" &&
            onTv.map((item) => (
              <Link to={`/tv/${item.id}`} key={item.id}>
                <Card
                  base_url={
                    "https://media.themoviedb.org/t/p/w220_and_h330_face"
                  }
                  img={item.poster_path}
                  title={item.name}
                  release_date={item.first_air_date}
                  rating={item.vote_average}
                  key={item.id}
                />
              </Link>
            ))}
          {toggle === "inTheaters" &&
            inTheaters.map((item) => (
              <Link to={`/movie/${item.id}`} key={item.id}>
                <Card
                  base_url={
                    "https://media.themoviedb.org/t/p/w220_and_h330_face"
                  }
                  img={item.poster_path}
                  title={item.title}
                  release_date={item.release_date}
                  rating={item.vote_average}
                  key={item.id}
                />
              </Link>
            ))}
        </div>
      </div>
    </div>
  );
}

export default Popular;
