import { MdMovie } from "react-icons/md";
import { RiMovie2Fill } from "react-icons/ri";

const Seasons = ({ data }) => {
  const sortedSeasons = [...data].sort((a, b) => {
    if (a.season_number === 0) return 1;
    if (b.season_number === 0) return -1;
    return a.season_number - b.season_number;
  });
  return (
    <div className="w-full pt-1">
      <div className="flex gap-4 sm:gap-5 overflow-x-auto overflow-y-visible scrollbar-none scroll-smooth pt-2 pb-5 px-1 sm:px-2">
        {sortedSeasons.map((item, index) => {
          const title = item.name;

          const year = (item.air_date || "").split("-")[0];

          return (
            <div
              key={item.id}
              className="group w-[160px] sm:w-[220px] md:w-[240px] shrink-0 rounded-2xl overflow-hidden bg-zinc-900 border border-zinc-800 transition-all duration-300 hover:scale-[1.02] hover:border-[#C1121F]/40 hover:shadow-xl hover:shadow-black/60 active:scale-[.98]"
            >
              <div className="relative h-[130px] sm:h-[185px] bg-zinc-800 overflow-hidden">
                {item.poster_path ? (
                  <>
                    <img
                      loading="lazy"
                      src={`https://image.tmdb.org/t/p/w500${item.poster_path}`}
                      alt={title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/35 via-transparent to-transparent opacity-70 group-hover:opacity-100 transition-all duration-500 pointer-events-none" />
                  </>
                ) : (
                  <div className="w-full h-full flex flex-col items-center justify-center">
                    <MdMovie size={45} className="text-zinc-600" />
                    <span className="text-zinc-500 text-sm mt-2">
                      No Poster
                    </span>
                  </div>
                )}
              </div>
              <div className="p-3 sm:p-4">
                <h2 className="text-base font-semibold text-white line-clamp-1">
                  {item.season_number === 0 ? "Special Episodes" : title}
                </h2>

                <p className="text-sm text-zinc-500 mt-1">
                  {item.episode_count}{" "}
                  {item.episode_count === 1 ? "Episode" : "Episodes"}
                </p>

                {item.season_number === 0 ? (
                  <div className="flex items-center gap-2 mt-3 text-sm">
                    <RiMovie2Fill size={12} className="text-zinc-600" />

                    <span className="text-zinc-500">Specials</span>

                    {year && <span className="text-zinc-600">•</span>}

                    {year && <span className="text-zinc-500">{year}</span>}
                  </div>
                ) : (
                  <div className="flex items-center gap-2 mt-3 text-sm">
                    {item.vote_average > 0 && (
                      <>
                        <span className="flex items-center gap-1 text-yellow-400">
                          ⭐ {item.vote_average.toFixed(1)}
                        </span>

                        {year && <span className="text-zinc-600">•</span>}
                      </>
                    )}

                    {year && <span className="text-zinc-400">{year}</span>}
                  </div>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Seasons;
