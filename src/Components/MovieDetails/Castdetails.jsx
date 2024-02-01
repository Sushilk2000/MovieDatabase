import { useEffect, useState } from "react";
import CastCard from "./castCard";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import FullCast from "./fullCast";
function CastDetails({ path }) {
  const [cast, setCast] = useState([]);
  const [firstNine, setFirstNine] = useState([]);

  async function fetchCast() {
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
        `https://api.themoviedb.org/3${path}/credits?language=en-US`,
        options
      );
      const data = await response.json();
      setCast(data?.cast);
      setFirstNine(data?.cast.slice(0, 9));
      console.log(data.cast);
      console.log(data.cast);
    } catch (error) {
      console.error("Error fetching cast:", error);
    }
  }

  useEffect(() => {
    fetchCast();
  }, []);

  return (
    <div className="pl-28 pr-8 py-8 w-full">
      <p className="font-bold text-xl font-sans">Top Billed Cast</p>
      <div className="flex gap-4 flex-nowrap overflow-x-scroll w-full">
        {firstNine?.map((person) => (
          <Link to={`/person/${person.id}`} key={person.id}>
            <CastCard
              key={person.id}
              name={person.name}
              img={person.profile_path}
              character={person.character}
            />
          </Link>
        ))}
      </div>
      <div className="font-bold text-xl mt-5 hover:link">
        <Link to={`${path}/credits`}>Full Cast & Crew</Link>
      </div>
    </div>
  );
}

export default CastDetails;
