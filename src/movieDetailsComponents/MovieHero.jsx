import { Link, useLocation } from "react-router-dom";
import { FaCalendar, FaClock, FaFilm, FaPlay, FaStar } from "react-icons/fa";

const MovieHero = ({ movie, director }) => {
  const { pathname } = useLocation();

  return (
    <div className="mt-4 md:mt-7 mx-2 md:mx-10 flex flex-col md:flex-row items-center md:items-start gap-6 md:gap-12">
      <div className="relative shrink-0 w-[180px] h-[260px] sm:w-[220px] sm:h-[320px] md:w-[250px] md:h-[350px] rounded-xl bg-zinc-800 overflow-hidden shadow-2xl">
        {movie.poster_path || movie.backdrop_path ? (
          <img
            loading="lazy"
            src={`https://image.tmdb.org/t/p/w500${
              movie.poster_path || movie.backdrop_path
            }`}
            alt={movie.title}
            className="w-full h-full object-cover"
          />
        ) : null}
      </div>

      <div className="flex flex-col justify-between py-2 md:py-5 text-center md:text-left">
        <div>
          <h1 className="text-2xl sm:text-3xl md:text-5xl font-bold">{movie.title}</h1>

          {movie.tagline && (
            <p className="italic text-base md:text-lg text-zinc-400 mt-2 md:mt-3">{movie.tagline}</p>
          )}

          <div className="flex flex-wrap items-center justify-center md:justify-start gap-2 sm:gap-3 mt-4 text-xs sm:text-sm">
            <span className="px-3.5 py-1.5 font-semibold rounded-full bg-zinc-900/60 backdrop-blur-md border-zinc-700 border flex items-center gap-2">
              <FaStar className="text-yellow-400" />{" "}
              {movie.vote_average?.toFixed(1)}
            </span>

            <span className="px-3.5 py-1.5 rounded-full bg-zinc-900/60 backdrop-blur-md border-zinc-700 border flex items-center gap-2">
              <FaCalendar />
              {movie.release_date?.split("-")[0]}
            </span>

            <span className="px-3.5 py-1.5 rounded-full bg-zinc-900/60 backdrop-blur-md border-zinc-700 border flex items-center gap-2">
              <FaClock />
              {movie.runtime
                ? `${Math.floor(movie.runtime / 60)}h ${movie.runtime % 60}m`
                : "N/A"}
            </span>

            <span className="px-3.5 py-1.5 rounded-full bg-[#C1121F] text-white flex items-center gap-2">
              <FaFilm /> {movie.status}
            </span>
          </div>

          <div className="flex flex-wrap items-center justify-center md:justify-start gap-2 sm:gap-3 mt-4 md:mt-5 text-xs sm:text-sm">
            {movie.genres?.map((genre) => (
              <span
                key={genre.id}
                className="px-3 py-1 rounded-full border border-zinc-500"
              >
                {genre.name}
              </span>
            ))}
          </div>

          <p className="mt-4 md:mt-5 max-w-4xl text-zinc-200 text-sm sm:text-base leading-7 md:leading-8">
            {movie.overview}
          </p>
          {director && (
            <div className="mt-4 md:mt-5">
              <p className="text-zinc-500 text-xs sm:text-sm">Directed By</p>

              <p className="text-white mt-1 text-base md:text-lg font-semibold">
                {director.name}
              </p>
            </div>
          )}
        </div>

        <Link
          to={`${pathname}/trailer`}
          className="flex items-center justify-center gap-3 mt-6 md:mt-7 px-8 py-3.5 w-full sm:w-fit rounded-xl bg-[#C1121F] hover:bg-[#A50F1A] font-semibold"
        >
          <FaPlay />
          Watch Trailer
        </Link>
      </div>
    </div>
  );
};

export default MovieHero;
