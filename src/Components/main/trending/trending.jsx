import { useEffect, useState } from "react";
import Card from "./card";
import { ButtonGroup, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

function Trending() {
  const [dayData, setDayData] = useState([]);
  const [weekData, setWeekData] = useState([]);
  const [toggle, setToggle] = useState("day");
  async function dayCall() {
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
        "https://api.themoviedb.org/3/trending/movie/day?language=en-US",
        options
      );
      const data = await response.json();
      setDayData(data.results);
      console.log("day", data); // Use the updated 'data' variable directly
    } catch (error) {
      console.log(error);
    }
  }

  async function weekCall() {
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
        "https://api.themoviedb.org/3/trending/movie/week?language=en-US",
        options
      );
      const data = await response.json();
      setWeekData(data.results);
      console.log("week", data); // Use the updated 'data' variable directly
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    dayCall(); // Call the function here
  }, []);

  useEffect(() => {
    weekCall(); // Call the function here
  }, []);

  return (
    <div className="bg-[url(https://www.themoviedb.org/assets/2/v4/misc/trending-bg-39afc2a5f77e31d469b25c187814c0a2efef225494c038098d62317d923f8415.svg)] bg-no-repeat bg-bottom pl-11">
      <div className="flex gap-8 font-semibold text-2xl font-serif mt-8 mb-4   items-baseline">
        <div>Trending</div>
        <div>
          <ButtonGroup size="sm" className="mb-2">
            <Button
              className={`btn ${
                toggle === "day" ? "btn-primary" : "btn-outline"
              } rounded-l-2xl rounded-r-none`}
              id="trendingToday"
              onClick={() => {
                setToggle("day");
              }}
            >
              Today
            </Button>
            <Button
              className={`btn ${
                toggle === "week" ? "btn-primary" : "btn-outline"
              } rounded-none rounded-r-2xl`}
              id="trendingWeek"
              onClick={() => {
                setToggle("week");
              }}
            >
              Week
            </Button>
          </ButtonGroup>
        </div>
      </div>
      <div>
        <div className="flex flex-nowrap overflow-x-auto gap-5">
          {toggle === "day" &&
            dayData.map((item) => (
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
          {toggle === "week" &&
            weekData.map((item) => (
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

export default Trending;
