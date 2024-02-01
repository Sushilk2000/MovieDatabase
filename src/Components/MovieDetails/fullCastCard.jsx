function FullCastCard({ data }) {
  const base_url = "https://media.themoviedb.org/t/p/w138_and_h175_face";
  const defaultImage =
    "https://imgs.search.brave.com/gV6Xy99WsNTWpgT2KUNxopKhP45u8QMrrL2DGi5HYxg/rs:fit:500:0:0/g:ce/aHR0cHM6Ly90NC5m/dGNkbi5uZXQvanBn/LzAyLzE1Lzg0LzQz/LzM2MF9GXzIxNTg0/NDMyNV90dFg5WWlJ/SXllYVI3TmU2RWFM/TGpNQW15NEd2UEM2/OS5qcGc";
  const img = data.profile_path;

  return (
    <div className="flex gap-6 items-center">
      <img
        src={img ? `${base_url}${img}` : defaultImage}
        alt=""
        className="rounded-md h-[66px] w-[66px] object-cover"
      />
      <div>
        <p className="font-bold text-md">{data.name}</p>
        <p className="text-sm font-normal">{data.character}</p>
      </div>
    </div>
  );
}

export default FullCastCard;
