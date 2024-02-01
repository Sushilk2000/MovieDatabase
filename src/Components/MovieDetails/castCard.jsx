function CastCard({ name, img, character }) {
  const base_url = "https://media.themoviedb.org/t/p/w138_and_h175_face";
  const defaultImage =
    "https://imgs.search.brave.com/gV6Xy99WsNTWpgT2KUNxopKhP45u8QMrrL2DGi5HYxg/rs:fit:500:0:0/g:ce/aHR0cHM6Ly90NC5m/dGNkbi5uZXQvanBn/LzAyLzE1Lzg0LzQz/LzM2MF9GXzIxNTg0/NDMyNV90dFg5WWlJ/SXllYVI3TmU2RWFM/TGpNQW15NEd2UEM2/OS5qcGc";

  return (
    <div className="min-w-[140px] w-[140px] pb-2.5 overflow-hidden border border-gray-500  h-full  shadow-lg cursor-pointer rounded-md">
      <img
        src={img !== null ? `${base_url}${img}` : defaultImage}
        height={175}
        className="rounded-tl-md rounded-tr-md object-fill w-full min-h-[175px]"
        alt={`${name}'s profile`}
      />
      <div className="flex flex-col pb-4 px-2">
        <p className="font-bold">{name}</p>
        <p className="font-normal text-sm">{character}</p>
      </div>
    </div>
  );
}

export default CastCard;
