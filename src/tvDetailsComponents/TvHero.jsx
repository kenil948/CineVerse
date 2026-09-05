
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { FaCalendar, FaFilm, FaPlay, FaStar } from "react-icons/fa";
import { PiTelevisionFill } from "react-icons/pi";

const TvHero = ({ tv, director }) => {
  const { pathname } = useLocation();
  const [imageError, setImageError] = useState(false);

  const posterSrc = tv?.poster_path || tv?.backdrop_path;

  return (
    <div className="mt-4 md:mt-7 mx-2 md:mx-10 flex flex-col md:flex-row items-center md:items-start gap-6 md:gap-12">
      <div className="relative shrink-0 w-[180px] h-[260px] sm:w-[220px] sm:h-[320px] md:w-[250px] md:h-[350px] rounded-xl bg-zinc-900 border border-zinc-800 overflow-hidden shadow-2xl flex items-center justify-center">
        {posterSrc && !imageError ? (
          <img
            loading="lazy"
            src={`https://image.tmdb.org/t/p/w500${posterSrc}`}
            alt={tv.name || "TV Show poster"}
            onError={() => setImageError(true)}
            className="w-full h-full object-cover"
          />
        ) : (
          <div className="w-full h-full flex flex-col items-center justify-center p-4 text-center bg-zinc-900/90 border border-zinc-800">
            <PiTelevisionFill size={44} className="text-[#C1121F] mb-2 opacity-80" />
            <span className="text-xs sm:text-sm font-semibold text-zinc-400">
              No Poster Available
            </span>
          </div>
        )}
      </div>

      <div className="flex flex-col justify-between py-2 md:py-5 text-center md:text-left">
        <div>
          <h1 className="text-2xl sm:text-3xl md:text-5xl font-bold">
            {tv.name || "Untitled TV Show"}
          </h1>

          {tv.tagline && (
            <p className="italic text-base md:text-lg text-zinc-400 mt-2 md:mt-3">
              {tv.tagline}
            </p>
          )}

          <div className="flex flex-wrap items-center justify-center md:justify-start gap-2 sm:gap-3 mt-4 text-xs sm:text-sm">
            <span className="px-3.5 py-1.5 font-semibold rounded-full bg-zinc-900/60 backdrop-blur-md border-zinc-700 border flex items-center gap-2">
              <FaStar className="text-yellow-400" />{" "}
              {tv.vote_average && tv.vote_average > 0
                ? tv.vote_average.toFixed(1)
                : "Not Rated Yet"}
            </span>

            <span className="px-3.5 py-1.5 rounded-full bg-zinc-900/60 backdrop-blur-md border-zinc-700 border flex items-center gap-2">
              <FaCalendar />
              {tv.first_air_date
                ? tv.first_air_date.split("-")[0]
                : "First Air Date Unknown"}
            </span>

            {tv.status && (
              <span className="px-3.5 py-1.5 rounded-full bg-[#C1121F] text-white flex items-center gap-2 font-medium">
                <FaFilm /> {tv.status}
              </span>
            )}
          </div>

          <div className="flex flex-wrap items-center justify-center md:justify-start gap-2 sm:gap-3 mt-4 md:mt-5 text-xs sm:text-sm">
            {tv.genres?.length > 0 ? (
              tv.genres.map((genre) => (
                <span
                  key={genre.id || genre.name}
                  className="px-3 py-1 rounded-full border border-zinc-500 text-zinc-300"
                >
                  {genre.name}
                </span>
              ))
            ) : (
              <span className="px-3 py-1 rounded-full border border-zinc-700 text-zinc-500">
                Genre Unknown
              </span>
            )}
          </div>

          <p className="mt-4 md:mt-5 max-w-4xl text-zinc-200 text-sm sm:text-base leading-7 md:leading-8">
            {tv.overview || "No overview is currently available for this TV show."}
          </p>

          <div className="mt-4 md:mt-5">
            <p className="text-zinc-500 text-xs sm:text-sm">
              {tv.created_by?.length > 0 ? "Created By" : "Creator / Director"}
            </p>
            <p className="text-white mt-1 text-base md:text-lg font-semibold">
              {tv.created_by?.length > 0
                ? tv.created_by.map((c) => c.name).join(", ")
                : director?.name || "Creator Unknown"}
            </p>
          </div>
        </div>

        <Link
          to={`${pathname}/trailer`}
          className="flex items-center justify-center gap-3 mt-6 md:mt-7 px-8 py-3.5 w-full sm:w-fit rounded-xl bg-[#C1121F] hover:bg-[#A50F1A] font-semibold text-white transition-colors"
        >
          <FaPlay />
          Watch Trailer
        </Link>
      </div>
    </div>
  );
};

export default TvHero;
