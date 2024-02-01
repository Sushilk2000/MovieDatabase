import { useEffect, useState } from "react";
import FullCastCard from "./fullCastCard";
import FullCrewCard from "./fullCrewCard";
import { Link, useLocation } from "react-router-dom";
function FullCast() {
  const path = useLocation();
  const [cast, setCast] = useState([]);
  const [crew, setCrew] = useState([]);

  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmYzQxMmU4YTIzZTdhNjA3ZmEzOGZmYzE4ZjMwMmRmOSIsInN1YiI6IjY1YWZkNTEyNjdiNjEzMDBhZmYwYTYwYyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Q26i66D6UDNHaJIdSnCDEHcPjZj8Qh6QBLiZi0Th9B4",
    },
  };

  async function fetchdata() {
    try {
      const response = await fetch(
        `https://api.themoviedb.org/3${path.pathname}?language=en-US`,
        options
      );
      const data = await response.json();
      setCast(data.cast);
      setCrew(data.crew);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    fetchdata();
  }, []);

  return (
    <div className="min-h-[75vh]">
      <div className="flex px-40 pb-16">
        <div className="w-1/2">
          <p className="font-semibold text-2xl mb-4">Cast {cast?.length}</p>
          <div className="flex flex-col gap-4">
            {cast?.map((person) => (
              <Link to={`/person/${person.id}`}>
                <FullCastCard
                  key={`${person.id}${person.name}`}
                  data={person}
                />
              </Link>
            ))}
          </div>
        </div>
        <div className="w-1/2 px-40">
          <p className="font-semibold text-2xl mb-4">Crew {crew?.length}</p>
          <div className="flex flex-col gap-4">
            {crew
              ?.sort((a, b) => {
                // First, sort by department
                const departmentComparison = a.department
                  .toLowerCase()
                  .localeCompare(b.department.toLowerCase());

                // If departments are the same, then sort by job
                if (departmentComparison === 0) {
                  return a.job.toLowerCase().localeCompare(b.job.toLowerCase());
                }

                return departmentComparison;
              })
              .map((person) => (
                <Link to={`/person/${person.id}`}>
                  <FullCrewCard
                    key={`${person.id}${person.job}`}
                    data={person}
                  />
                </Link>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default FullCast;
