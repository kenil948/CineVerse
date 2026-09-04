import { Link, useLocation } from "react-router-dom";
import { FaUserCircle } from "react-icons/fa";

const MovieCastCards = ({ data, isGrid = false }) => {
  const location = useLocation();
  const sortedCast = data ? [...data].sort((a, b) => a.order - b.order) : [];
  return (
    <div
      className={`${isGrid ? "w-full p-1 sm:p-2 grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-3 sm:gap-6" : "flex gap-4 sm:gap-5 overflow-x-auto scrollbar-none scroll-smooth p-2 sm:p-3"}`}
    >
      {sortedCast?.map((c) => (
        <Link
          to={`/person/details/${c.id}`}
          state={{ from: location.pathname }}
          key={c.id}
          className={`group ${isGrid ? "w-full" : "w-[160px] sm:w-[220px] md:w-[240px] shrink-0"} rounded-2xl overflow-hidden bg-zinc-900 border border-zinc-800 transition-all duration-300 hover:scale-[1.02] hover:border-[#C1121F]/40 hover:shadow-xl hover:shadow-black/60 active:scale-[.98]`}
        >
          <div className="relative h-[180px] sm:h-[265px] overflow-hidden bg-gradient-to-br from-zinc-800 via-zinc-900 to-black">
            {c.profile_path ? (
              <>
                <img
                  loading="lazy"
                  src={`https://image.tmdb.org/t/p/w500${c.profile_path}`}
                  alt={c.name}
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-70 group-hover:opacity-100 transition-all duration-500 pointer-events-none" />
              </>
            ) : (
              <div className="flex h-full items-center justify-center">
                <FaUserCircle size={90} className="text-zinc-600" />
              </div>
            )}
          </div>

          <div className="p-3 sm:p-4">
            <h2 className="mt-2 text-lg font-semibold text-white line-clamp-1">
              {c.name}
            </h2>
            <p className="text-sm text-zinc-400 line-clamp-1">
              {c.character?.trim() || "Cast Member"}
            </p>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default MovieCastCards;
