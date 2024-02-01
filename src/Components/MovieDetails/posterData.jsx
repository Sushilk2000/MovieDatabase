import { Button, Tooltip } from "antd";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Recommandation from "./recom";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import {
  faList,
  faHeart,
  faBookmark,
  faStar,
} from "@fortawesome/free-solid-svg-icons"; // Import the specific icon you want to use
import CastDetails from "./Castdetails";
import FullCast from "./fullCast";
import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
function MovieDetails() {
  const base_url = "https://media.themoviedb.org/t/p/w300_and_h450_bestv2";
  const base_backdrop =
    "https://media.themoviedb.org/t/p/w1920_and_h800_multi_faces";
  const defaultImage =
    "https://imgs.search.brave.com/gV6Xy99WsNTWpgT2KUNxopKhP45u8QMrrL2DGi5HYxg/rs:fit:500:0:0/g:ce/aHR0cHM6Ly90NC5m/dGNkbi5uZXQvanBn/LzAyLzE1Lzg0LzQz/LzM2MF9GXzIxNTg0/NDMyNV90dFg5WWlJ/SXllYVI3TmU2RWFM/TGpNQW15NEd2UEM2/OS5qcGc";

  const path = useLocation();
  console.log(path);
  const [movieData, setMovieData] = useState();
  const [keyData, setKeyData] = useState();
  async function fetchdata() {
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
        `https://api.themoviedb.org/3${path.pathname}?language=en-US`,
        options
      );
      const data = await response.json();
      setMovieData(data);
      console.log("dattta", data);
    } catch (error) {
      alert(error);
    }
  }
  async function keywords() {
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
        `https://api.themoviedb.org/3${path.pathname}/keywords`,
        options
      );
      const data = await response.json();
      setKeyData(data.keywords);
      console.log("keys", data?.keywords);
    } catch (error) {
      alert(error);
    }
  }
  useEffect(() => {
    fetchdata();
    keywords();
  }, []);
  const hours = Math.floor(movieData?.runtime / 60);
  const minutes = movieData?.runtime % 60;
  return (
    <>
      <div
        id="details_backdrop"
        className=" min-h-[32rem] px-28 py-8 flex gap-4 text-white bg-no-repeat bg-gradient-to-br-[(rgba(31.5, 31.5, 52.5, 0.5), rgba(31.5, 31.5, 52.5, 0.5)]"
        style={{
          backgroundImage: `url(${base_backdrop}${movieData?.backdrop_path})`,
          backgroundPosition: "right",
        }}
      >
        <div className="min-w-[300px] min-h-[450px]">
          <img
            src={
              movieData?.backdrop_path
                ? `${base_url}${movieData?.poster_path}`
                : defaultImage
            }
            alt=""
            className="rounded-lg w-[300px] h-[450px] object-contain"
          />
        </div>
        <div className="flex flex-col gap-4 justify-center pl-6">
          <div className="flex flex-col">
            <p className="flex gap-2 items-center">
              <span className="text-4xl font-bold">
                {movieData?.title ? movieData?.title : movieData?.original_name}
              </span>
              <span className="text-4xl text-[#999] font-bold]">
                {movieData?.release_date
                  ? `( ${movieData?.release_date?.split("-")[0]} )`
                  : movieData?.first_air_date?.split("-")[0]}
              </span>
            </p>
            <p className="flex gap-2 items-center">
              <span>{movieData?.release_date}</span>
              <span className="text-2xl">•</span>
              <span>
                {movieData?.genres?.map((genre, index) => (
                  <span key={genre.id}>
                    {index > 0 && ", "} {genre.name}
                  </span>
                ))}
              </span>
              <span className="text-2xl">•</span>
              <p>{`${hours}h ${minutes}m`}</p>
            </p>
          </div>
          <div className="flex gap-4 items-center">
            <div className="bg-black rounded-full font-bold p-1">
              <div className="w-[56px] h-[56px] hover:w-[60px] hover:h-[60px] z-10">
                <CircularProgressbar
                  value={movieData?.vote_average * 10} // Assuming rating is on a scale of 0 to 10
                  text={`${Math.trunc(movieData?.vote_average * 10)}%`}
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
            <p>
              <Tooltip title="Add to list" placement="bottom" color={"#172554"}>
                <Button
                  type="default"
                  className="bg-blue-950 text-white hover:bg-blue-95 w-[52px] border-none p-0"
                  shape="circle"
                  icon={<FontAwesomeIcon icon={faList} />}
                  size="large"
                />
              </Tooltip>
            </p>
            <p>
              <Tooltip
                title="Mark as favorite"
                placement="bottom"
                color={"#172554"}
              >
                <Button
                  type="default"
                  className="bg-blue-950 text-white hover:bg-blue-95 border-none w-[52px] p-0"
                  shape="circle"
                  icon={<FontAwesomeIcon icon={faHeart} />}
                  size="large"
                />
              </Tooltip>
            </p>
            <p>
              <Tooltip
                title="Add to your watchlist"
                placement="bottom"
                color={"#172554"}
              >
                <Button
                  type="default"
                  className="bg-blue-950 text-white hover:bg-blue-95 border-none w-[52px] p-0"
                  shape="circle"
                  icon={<FontAwesomeIcon icon={faBookmark} />}
                  size="large"
                />
              </Tooltip>
            </p>
            <p>
              <Tooltip title="Rate It!" placement="bottom" color={"#172554"}>
                <Button
                  type="default"
                  className="bg-blue-950 text-white hover:bg-blue-95 border-none w-[52px] p-0"
                  shape="circle"
                  icon={<FontAwesomeIcon icon={faStar} />}
                  size="large"
                />
              </Tooltip>
            </p>
          </div>
          <div>{movieData?.tagline}</div>
          <div>
            <p className="text-xl font-semibold text-white font-sans">
              Overview
            </p>
            <p className="text-white">{movieData?.overview}</p>
          </div>
        </div>
      </div>
      <div className="flex">
        <div className="flex flex-col w-3/4">
          <CastDetails path={path.pathname}></CastDetails>
          <Recommandation path={path.pathname}></Recommandation>
        </div>
        <div className="bg-white rounded-lg shadow-lg p-4 w-1/4">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-medium text-gray-900">
              {movieData?.revenue ? "Movie Details" : "Series Details"}
            </h2>
            <div className="flex items-center"></div>
          </div>
          <div className="mb-4">
            <p className="text-sm font-medium text-gray-500">Status</p>
            <p className="text-lg font-medium text-gray-900">
              {movieData?.status}
            </p>
          </div>
          <div className="mb-4">
            <p className="text-sm font-medium text-gray-500">
              Original Language
            </p>
            <p className="text-lg font-medium text-gray-900">
              {movieData?.original_language}
            </p>
          </div>
          <div className="mb-4">
            <p className="text-sm font-medium text-gray-500">
              {movieData?.budget ? "Budget" : "Network"}
            </p>
            <p className="text-lg font-medium text-gray-900">
              {movieData?.budget >= 0 ? (
                `$ ${movieData.budget}`
              ) : (
                <img
                  src={`https://media.themoviedb.org/t/p/h30${movieData?.networks[0]?.logo_path}`}
                ></img>
              )}
            </p>
          </div>
          <div className="mb-4">
            <p className="text-sm font-medium text-gray-500">
              {movieData?.revenue ? "Revenue" : "Type"}
            </p>
            <p className="text-lg font-medium text-gray-900">
              {movieData?.revenue}
              {movieData?.type}
            </p>
          </div>
          <div className="mb-4">
            <p className="text-sm font-medium text-gray-500">Keywords</p>
            <div className="flex flex-wrap gap-2" key={movieData?.id}>
              {keyData ? (
                keyData?.map((keyword) => (
                  <span
                    className="px-2 py-1 bg-gray-200 rounded text-sm font-medium text-gray-700"
                    key={keyword.id}
                  >
                    {keyword.name}
                  </span>
                ))
              ) : (
                <div>No keywords have been added.</div>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default MovieDetails;
