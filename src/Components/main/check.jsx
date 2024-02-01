function Check() {
  return (
    <div className="relative min-h-[350px] w-full pt-28 px-12 flex flex-col gap-4">
      <div className="absolute inset-0 bg-[url(https://media.themoviedb.org/t/p/w1920_and_h600_multi_faces/ctMserH8g2SeOAnCw5gFjdQF8mo.jpg)] bg-cover bg-no-repeat before:absolute before:inset-0 before:bg-black before:opacity-70"></div>
      <div className="relative z-10">
        <p className="font-bold text-6xl w-[20rem] mb-4 text-white">
          That's a Wrap 2023
        </p>
        <p className="text-white font-semibold text-lg">
          The best (and worst) of the year from TMDB.
        </p>
        <button className="flex w-max items-center gap-2 border border-white px-4 rounded-l-full rounded-r-full py-2 font-semibold text-white ">
          Check it out{" "}
          <img
            src="https://www.themoviedb.org/assets/2/v4/glyphicons/basic/glyphicons-basic-830-arrow-thin-right-white-27b356aac3227210acca2ae44fcfed8a6c0ca7adde4e867fe9793cae4ebda9d1.svg"
            alt=""
            className="h-4 translate-y-[1px]"
          />
        </button>
      </div>
    </div>
  );
}

export default Check;
