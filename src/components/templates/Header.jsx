
import { Link } from "react-router-dom";
import { FaPlay, FaStar } from "react-icons/fa";

const Header = ({ data }) => {
  const trailerPath =
    data.media_type === "movie"
      ? `/movies/details/${data.id}/trailer`
      : `/tv-shows/details/${data.id}/trailer`;
  const title = data.title || data.name;
  const year = (data.release_date || data.first_air_date || "").split("-")[0];
  const rating = data.vote_count > 0 ? data.vote_average.toFixed(1) : "N/A";
  const mediaType =
    data.media_type === "movie"
      ? "Movie"
      : data.media_type === "tv"
        ? "TV Show"
        : "Person";
  const detailsPath =
    data.media_type === "movie"
      ? `/movies/details/${data.id}`
      : `/tv-shows/details/${data.id}`;
  return (
    <header
      style={{
        backgroundImage: `
          linear-gradient(
            to bottom,
            rgba(0,0,0,.10) 0%,
            rgba(0,0,0,.50) 60%,
            rgba(0,0,0,.90) 100%
          ),
          linear-gradient(
            to right,
            rgba(0,0,0,.75) 0%,
            rgba(0,0,0,.30) 50%,
            rgba(0,0,0,.75) 100%
          ),
          url(https://image.tmdb.org/t/p/original${
            data.backdrop_path || data.poster_path
          })
        `,
        backgroundPosition: "center top",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
      className="relative w-full min-h-[400px] md:min-h-[520px] rounded-2xl md:rounded-3xl overflow-hidden mt-4 px-5 py-8 md:px-14 md:py-12 flex flex-col justify-end bg-[#18181b]"
    >
      <h1 className="max-w-3xl text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-black text-white drop-shadow-lg">
        {title}
      </h1>
      <div className="flex flex-wrap items-center gap-2 sm:gap-4 mt-4 md:mt-5 text-xs sm:text-sm">
        <span className="flex items-center gap-1 font-semibold">
          <FaStar className="text-yellow-400" />
          <span className="text-yellow-400">{rating}</span>
          <span className="text-zinc-400 text-xs sm:text-sm">/ 10</span>
        </span>

        {year && (
          <>
            <span className="text-zinc-600 mx-1.5 sm:mx-3">•</span>
            <span className="text-zinc-200">{year}</span>
          </>
        )}
        <span className="text-zinc-600 mx-1.5 sm:mx-3">•</span>
        <span className="px-3 py-1 rounded-full bg-[#C1121F] text-white text-xs font-semibold uppercase tracking-wider">
          {mediaType}
        </span>
      </div>

      <p className="mt-4 md:mt-6 max-w-xl text-zinc-300 text-sm sm:text-base md:text-lg leading-6 md:leading-8 line-clamp-2 md:line-clamp-3">
        {data.overview || "No overview available."}
      </p>

      <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4 mt-6 md:mt-8 z-10">
        <Link to={trailerPath} className="flex items-center justify-center gap-3 px-6 md:px-8 py-3 md:py-3.5 rounded-xl bg-[#C1121F] hover:bg-[#A50F1A] text-white font-semibold transition-all duration-300 active:scale-95">
          <FaPlay />
          Watch Trailer
        </Link>
        <Link
          to={detailsPath}
          className="flex items-center justify-center px-6 md:px-8 py-3 md:py-3.5 rounded-xl bg-white/10 backdrop-blur-md hover:bg-white/20 text-white font-semibold transition-all duration-300 active:scale-95"
        >
          More Info
        </Link>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-28 bg-gradient-to-t from-[#18181b] via-[#18181b]/80 to-transparent pointer-events-none rounded-b-2xl md:rounded-b-3xl"></div>
    </header>
  );
};

export default Header;
