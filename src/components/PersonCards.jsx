import { FaUserCircle } from "react-icons/fa";
import { Link } from "react-router-dom";

const PersonCards = ({ data }) => {
  return (
    <div className="w-full p-1 sm:p-2 grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-3 sm:gap-6">
      {data.map((item) => {
        const image = item.profile_path;

        const name = item.name;

        const department = item.known_for_department || "Acting";

        const knownFor =
          item.known_for?.[0]?.title ||
          item.known_for?.[0]?.name ||
          "No notable work available";

        return (
          <Link
            to={`/person/details/${item.id}`}
            key={item.id}
            className="group flex flex-col w-full rounded-2xl overflow-hidden bg-zinc-900 border border-zinc-800 transition-all duration-300 hover:scale-[1.02] hover:border-[#C1121F]/40 hover:shadow-xl hover:shadow-black/60 active:scale-[.98]"
          >
            <div className="relative h-[180px] sm:h-[265px] overflow-hidden bg-gradient-to-br from-zinc-800 via-zinc-900 to-black">
              {image ? (
                <>
                  <img
                    loading="lazy"
                    src={`https://image.tmdb.org/t/p/w500${image}`}
                    alt={name}
                    className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-70 group-hover:opacity-100 transition-all duration-500 pointer-events-none" />
                </>
              ) : (
                <div className="flex h-full items-center justify-center">
                  <FaUserCircle size={90} className="text-zinc-600" />
                </div>
              )}

              <div className="absolute top-3 left-3">
                <span className="rounded-full bg-zinc-900/75 backdrop-blur-md px-3 py-1 text-[11px] font-medium text-white">
                  {department}
                </span>
              </div>
            </div>

            <div className="flex flex-1 flex-col px-3 pt-3 pb-4 sm:px-4 sm:pt-4 sm:pb-5">
              <h2 className="text-lg font-semibold text-white line-clamp-1 transition-colors duration-300">
                {name}
              </h2>

              <p className="text-sm line-clamp-2">
                <span className="text-zinc-500">Known for</span>

                <span className="text-zinc-600 mx-1">•</span>

                <span className="text-zinc-300">{knownFor}</span>
              </p>
            </div>
          </Link>
        );
      })}
    </div>
  );
};

export default PersonCards;
