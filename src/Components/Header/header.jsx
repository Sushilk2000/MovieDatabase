import React from "react";

import Movies from "./movies";
import TvShows from "./tvShows";
import People from "./people";
import { Link } from "react-router-dom";
function Header() {
  return (
    <>
      <div className="flex justify-between px-40 items-center h-16  font-sans font-semibold bg-[#032541] text-white">
        <div className="flex items-center gap-8">
          <div>
            <Link to={`/`}>
              <img
                src="https://www.themoviedb.org/assets/2/v4/logos/v2/blue_short-8e7b30f73a4020692ccca9c88bafe5dcb6f8a62a4c6bc55cd9ba82bb2cd95f6c.svg"
                alt=""
                className="w-40"
              />
            </Link>
          </div>
          <ul className="flex gap-8 items-center">
            <li>
              <Movies></Movies>
            </li>
            <li>
              <TvShows></TvShows>
            </li>
            <li>
              <People></People>
            </li>
          </ul>
        </div>
        <div className="flex items-center gap-8">
          <img
            src="https://www.themoviedb.org/assets/2/v4/glyphicons/basic/glyphicons-basic-371-plus-white-0bac34f16124808a12ea863b4d9cc6e599dee7c0a80658cfe9ead26939e64517.svg"
            className="w-6"
          />
          <div className="w-7 h-6 border border-white rounded-sm px-2 py-3 font-semibold uppercase flex items-center justify-center">
            en
          </div>
          <img
            src="https://www.themoviedb.org/assets/2/v4/glyphicons/basic/glyphicons-basic-441-bell-9cd2af257b98c4af3460078777d8e38a5e12bca89704eeac2f39273afcbd06ff.svg"
            alt=""
            className="w-6 invert"
          />
          <div>
            <img
              src="https://imgs.search.brave.com/gLciFO7xykeQKiunWQ1S9-s1fq1snzvKAxAEzg1YGac/rs:fit:500:0:0/g:ce/aHR0cHM6Ly90NC5m/dGNkbi5uZXQvanBn/LzAwLzY1LzEwLzQ3/LzM2MF9GXzY1MTA0/NzE4X3gxN2E3Nnd6/V0tJbTNCbGhBNnV5/WVZrRHM5OTgyYzZx/LmpwZw"
              alt=""
              className="w-8 h-8 rounded-full bg-white"
            />
          </div>
          <img
            src="https://www.themoviedb.org/assets/2/v4/glyphicons/basic/glyphicons-basic-28-search-blue-177462d06db81ff2a02aa022c1c0be5ba4200d7bd3f51091ed9298980e3a26a1.svg"
            alt=""
            className="w-8 "
          />
        </div>
      </div>
    </>
  );
}
export default Header;
