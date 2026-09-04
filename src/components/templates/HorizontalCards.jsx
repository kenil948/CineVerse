import { Link, useLocation } from "react-router-dom";

import { FaStar } from "react-icons/fa";
import { MdMovie } from "react-icons/md";
import { PiTelevisionFill } from "react-icons/pi";

const HorizontalCards = ({ data }) => {
  const location = useLocation();
  return (
    <div className="w-full pt-1">
      <div className="flex gap-5 overflow-x-auto overflow-y-visible scrollbar-none scroll-smooth pt-2 pb-5 px-2">
        {data.map((item) => {
          const title = item.title || item.name;

          const year = (item.release_date || item.first_air_date || "").split(
            "-",
          )[0];

          const rating =
            item.vote_count > 0 ? item.vote_average.toFixed(1) : "N/A";

          const path =
            item.media_type === "movie"
              ? `/movies/details/${item.id}`
              : `/tv-shows/details/${item.id}`;

          return (
            <Link
              to={path}
              key={`${item.media_type}-${item.id}`}
              state={{ from: location.pathname }}
              className="group w-[200px] sm:w-[220px] md:w-[240px] shrink-0 rounded-2xl overflow-hidden bg-zinc-900 border border-zinc-800 transition-all duration-300 hover:scale-[1.02] hover:border-[#C1121F]/40 hover:shadow-xl hover:shadow-black/60 active:scale-[.98]"
            >
              <div className="relative h-[130px] sm:h-[155px] bg-zinc-800 overflow-hidden">
                {item.backdrop_path || item.poster_path ? (
                  <>
                    <img
                      loading="lazy"
                      src={`https://image.tmdb.org/t/p/w500${
                        item.backdrop_path || item.poster_path
                      }`}
                      alt={title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/35 via-transparent to-transparent opacity-70 group-hover:opacity-100 transition-all duration-500 pointer-events-none" />
                  </>
                ) : (
                  <div className="w-full h-full flex items-center justify-center">
                    <MdMovie size={45} className="text-zinc-600" />
                  </div>
                )}
              </div>
              <div className="p-3 sm:p-4">
                <h2 className="text-base font-semibold text-white line-clamp-1">
                  {title}
                </h2>
                <div className="mt-3">
                  <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-800/70 border border-zinc-700 text-zinc-300 text-xs transition-all duration-300 group-hover:border-zinc-500 group-hover:bg-zinc-700">
                    {item.media_type === "movie" ? (
                      <>
                        <MdMovie size={14} />
                        Movie
                      </>
                    ) : (
                      <>
                        <PiTelevisionFill size={14} />
                        TV Show
                      </>
                    )}
                  </span>
                </div>

                <div className="flex items-center gap-2 mt-3 text-sm">
                  <span className="flex items-center gap-1 text-yellow-400">
                    <FaStar size={12} />
                    {rating}
                  </span>

                  {year && (
                    <>
                      <span className="text-zinc-600">•</span>

                      <span className="text-zinc-400">{year}</span>
                    </>
                  )}
                </div>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default HorizontalCards;
