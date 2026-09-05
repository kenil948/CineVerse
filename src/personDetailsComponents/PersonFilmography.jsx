import { useMemo, useState } from "react";
import { FaFilm } from "react-icons/fa";
import HorizontalCards from "../components/templates/HorizontalCards";

const PersonFilmography = ({
  name,
  department,
  movies = [],
  tvShows = [],
  directedMovies = [],
  directedTvShows = [],
}) => {
  const [activeTab, setActiveTab] = useState("movie");
  const movieData = department === "Directing" ? directedMovies : movies;
  const tvData = department === "Directing" ? directedTvShows : tvShows;

  const totalCredits = movieData.length + tvData.length;

  const currentData = useMemo(() => {
    const data = activeTab === "movie" ? movieData : tvData;
    return [...data].sort((a, b) => (b.popularity || 0) - (a.popularity || 0));
  }, [activeTab, movieData, tvData]);

  if (totalCredits === 0) {
    return (
      <section className="px-4 md:px-10 pt-5">
        <h2 className="text-2xl md:text-4xl font-black text-white mb-6">
          {department === "Directing" ? "Directed Works" : "Filmography"}
        </h2>

        <div className="bg-zinc-900/60 border border-zinc-800 rounded-2xl md:rounded-3xl p-8 sm:p-12 text-center flex flex-col items-center justify-center">
          <div className="w-16 h-16 rounded-full bg-[#C1121F]/10 border border-[#C1121F]/30 flex items-center justify-center mb-4">
            <FaFilm size={28} className="text-[#C1121F]" />
          </div>

          <h3 className="text-xl sm:text-2xl font-bold text-white mb-2">
            No Credits Available
          </h3>

          <p className="text-zinc-400 text-sm sm:text-base max-w-md leading-relaxed">
            No film or television credits are currently available.
          </p>
        </div>
      </section>
    );
  }

  return (
    <section className="px-4 md:px-10 pt-5">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6 md:mb-8">
        <div>
          <h2 className="text-2xl md:text-4xl font-black text-white">
            {department === "Directing" ? "Directed Works" : "Filmography"}
          </h2>

          <p className="text-zinc-400 mt-1 md:mt-2 text-sm md:text-base">
            {department === "Directing"
              ? `Movies and TV shows directed by ${name}.`
              : `Explore every movie and TV show appearance by ${name}.`}
          </p>
        </div>

        <div className="w-fit inline-flex shrink-0 bg-zinc-900 border border-zinc-800 rounded-xl p-1">
          <button
            onClick={() => setActiveTab("movie")}
            className={`px-3.5 py-1.5 sm:px-5 sm:py-2 rounded-lg text-xs sm:text-sm font-medium transition-all duration-300 ${
              activeTab === "movie"
                ? "bg-[#C1121F] text-white shadow-md"
                : "text-zinc-400 hover:bg-zinc-800 hover:text-white"
            }`}
          >
            Movies ({movieData.length})
          </button>

          <button
            onClick={() => setActiveTab("tv")}
            className={`px-3.5 py-1.5 sm:px-5 sm:py-2 rounded-lg text-xs sm:text-sm font-medium transition-all duration-300 ${
              activeTab === "tv"
                ? "bg-[#C1121F] text-white shadow-md"
                : "text-zinc-400 hover:bg-zinc-800 hover:text-white"
            }`}
          >
            TV Shows ({tvData.length})
          </button>
        </div>
      </div>

      {currentData.length > 0 ? (
        <HorizontalCards key={activeTab} data={currentData} />
      ) : (
        <div className="mt-10 flex items-center justify-center rounded-2xl border border-zinc-800 bg-zinc-900/40 py-16">
          <div className="text-center">
            <h3 className="text-2xl font-semibold text-white">
              No {activeTab === "movie" ? "Movies" : "TV Shows"} Found
            </h3>

            <p className="mt-2 text-zinc-500">
              This person has no credited{" "}
              {activeTab === "movie" ? "movie" : "TV show"} appearances matching
              the current filters.
            </p>
          </div>
        </div>
      )}
    </section>
  );
};

export default PersonFilmography;
