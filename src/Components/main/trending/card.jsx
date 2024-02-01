import React from "react";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

function Card({ base_url, img, title, release_date, rating }) {
  const defaultImage =
    "https://imgs.search.brave.com/gV6Xy99WsNTWpgT2KUNxopKhP45u8QMrrL2DGi5HYxg/rs:fit:500:0:0/g:ce/aHR0cHM6Ly90NC5m/dGNkbi5uZXQvanBn/LzAyLzE1Lzg0LzQz/LzM2MF9GXzIxNTg0/NDMyNV90dFg5WWlJ/SXllYVI3TmU2RWFM/TGpNQW15NEd2UEM2/OS5qcGc";

  return (
    <div className="w-[150px] h-full gap-5 cursor-pointer shadow-md relative">
      <div className="w-full min-w-[150px]">
        <img
          src={img ? `${base_url}${img}` : defaultImage}
          className="h-[225px] w-full rounded-md"
          alt=""
        />
      </div>
      <div className="pt-6 px-2">
        <div className="absolute bottom-[75px] left-2.5 bg-black rounded-full font-bold p-1">
          <div className="w-[38px] h-[38px]">
            <CircularProgressbar
              value={rating * 10} // Assuming rating is on a scale of 0 to 10
              text={`${Math.trunc(rating * 10)}%`}
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
        <p className="font-bold line-clamp-2">{title}</p>
        <p className="font-light">{release_date}</p>
      </div>
    </div>
  );
}

export default Card;
