function MovieResult({ movie }) {
  const baseImageUrl = "https://media.themoviedb.org/t/p/w94_and_h141_bestv2";
  const defaultImageUrl =
    "https://imgs.search.brave.com/oB6fgT45DC10B0RQfk3kTBtZ0W-2p7udZUxPnfvKT3M/rs:fit:860:0:0/g:ce/aHR0cHM6Ly90My5m/dGNkbi5uZXQvanBn/LzA0LzYyLzkzLzY2/LzM2MF9GXzQ2Mjkz/NjY4OV9CcEVFY3hm/Z011WVBmVGFJQU9D/MXRDRHVybXNubzdT/cC5qcGc";
  return (
    <div className="h-[141px] w-[1020px] flex border my-4 shadow-md rounded-md cursor-pointer">
      <div className="h-full w-[94px] min-w-[94px] border-r-2">
        <img
          src={
            movie.poster_path
              ? `${baseImageUrl}${movie.poster_path}`
              : defaultImageUrl
          }
        />
      </div>
      <div className="pl-4 py-2">
        <p className="text-xl font-bold">
          {movie?.title ? movie?.title : movie.name}
        </p>
        <p className="text-[#999]">
          {movie?.release_date ? movie?.release_date : movie?.first_air_date}
        </p>
        <p className="line-clamp-2">{movie?.overview}</p>
      </div>
    </div>
  );
}
export default MovieResult;
