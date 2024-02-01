import { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Card from "../main/trending/card";
import { space } from "postcss/lib/list";
function PersonData() {
  const nav = useLocation();
  const [data, setData] = useState();
  const [credits, setCredits] = useState();
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
      `https://api.themoviedb.org/3${nav.pathname}}`,
      options
    );
    const datta = await response.json();
    setData(datta);
  }
  async function fetchCredits() {
    const options = {
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmYzQxMmU4YTIzZTdhNjA3ZmEzOGZmYzE4ZjMwMmRmOSIsInN1YiI6IjY1YWZkNTEyNjdiNjEzMDBhZmYwYTYwYyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Q26i66D6UDNHaJIdSnCDEHcPjZj8Qh6QBLiZi0Th9B4",
      },
    };
    const response = await fetch(
      `https://api.themoviedb.org/3${nav.pathname}/combined_credits`,
      options
    );
    const data = await response.json();
    setCredits(data.cast);
  }

  useEffect(() => {
    fetchData();
    fetchCredits();
  }, []);
  return (
    <>
      <div className="flex pl-24 pt-8 pr-48 min-h-[75vh]">
        <div className="w-1/4 mr-6">
          <div>
            <img
              className="rounded-lg"
              src={`https://media.themoviedb.org/t/p/w300_and_h450_bestv2${data?.profile_path}`}
              alt=""
            />
          </div>
          <div className="flex flex-col gap-4">
            <p className="font-semibold text-xl">Personal Info</p>
            <p className="flex flex-col">
              <span className="font-semibold">Known For</span>
              <span>
                {data?.known_for_department ? data?.known_for_department : "-"}
              </span>
            </p>
            <p className="flex flex-col">
              <span className="font-semibold">Known Credits</span>
              <span>{credits?.length ? credits?.length : "-"}</span>
            </p>
            <p className="flex flex-col">
              <span className="font-semibold">Gender</span>
              <span>
                {data?.gender === 0 && <span>Not Specifed</span>}
                {data?.gender === 1 && <span>Female</span>}
                {data?.gender === 2 && <span>Male</span>}
                {data?.gender === 3 && <span>Non-binary</span>}
              </span>
            </p>
            <p className="flex flex-col">
              <span className="font-semibold">Birthday</span>
              <span>{data?.birthday ? data?.birthday : "-"}</span>
            </p>
            <p className="flex flex-col">
              <span className="font-semibold">Place of Birth</span>
              <span>{data?.place_of_birth ? data?.place_of_birth : "-"}</span>
            </p>
            <p className="flex flex-col">
              <span className="font-semibold">Also Known As</span>
              <span>
                {data?.also_known_as.length !== 0
                  ? data?.also_known_as.map((alias) => <span>{alias}</span>)
                  : "-"}
              </span>
            </p>
          </div>
        </div>
        <div className="w-3/4">
          <div className="font-bold text-2xl mt-4">{data?.name}</div>
          <div className="flex flex-col mt-4">
            <span className="font-semibold text-xl mb-1">Biography</span>
            <span>
              {data?.biography
                ? data.biography
                : `we dont have biography for ${data?.name}`}
            </span>
          </div>
          <div className="mt-5">
            <span className="text-xl font-semibold">Known For</span>

            <div
              key={data?.poster_path}
              className="flex gap-4 overflow-x-scroll mt-4"
            >
              {credits && credits.length > 12
                ? credits?.slice(0, 12).map((item) => (
                    <Link key={item.id} to={`/${item.media_type}/${item.id}`}>
                      <Card
                        base_url={
                          "https://media.themoviedb.org/t/p/w150_and_h225_bestv2"
                        }
                        img={item?.poster_path}
                        title={item.title}
                        date={
                          item.release_date
                            ? item.release_date
                            : item.first_airing
                        }
                        rating={item?.vote_average}
                        key={`${data?.id}${item?.id}${item?.title}`}
                      />
                    </Link>
                  ))
                : credits?.map((item) => (
                    <Link key={item.id} to={`/${item.media_type}/${item.id}`}>
                      <Card
                        base_url={
                          "https://media.themoviedb.org/t/p/w150_and_h225_bestv2"
                        }
                        img={item?.poster_path}
                        title={item.title}
                        date={
                          item.release_date
                            ? item.release_date
                            : item.first_airing
                        }
                        rating={item?.vote_average}
                        key={`${data?.id}${item?.id}${item?.title}`}
                      />
                    </Link>
                  ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default PersonData;
