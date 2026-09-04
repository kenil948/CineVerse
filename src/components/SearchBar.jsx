import { useEffect, useState } from "react";
import { MdMovie, MdPeople } from "react-icons/md";
import { PiTelevisionFill } from "react-icons/pi";
import { RxCross2 } from "react-icons/rx";
import { FaStar } from "react-icons/fa";
import axios from "../Axios";
import { IoMdSearch } from "react-icons/io";
import { Link } from "react-router-dom";

const SearchBar = ({ mediaType = "multi" }) => {
  const [query, setQuery] = useState("");
  const [search, setSearch] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleSearch = async () => {
    try {
      setLoading(true);

      if (mediaType === "all") {
        const { data } = await axios.get(`/search/multi?query=${query}`);

        setSearch(
          data.results.filter(
            (item) => item.media_type === "movie" || item.media_type === "tv",
          ),
        );
      } else {
        const { data } = await axios.get(`/search/${mediaType}?query=${query}`);

        setSearch(data.results);
      }
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (!query.trim()) {
      setSearch([]);
      setLoading(false);
      return;
    }

    const timer = setTimeout(() => {
      handleSearch();
    }, 400);

    return () => clearTimeout(timer);
  }, [query]);

  return (
    <div className="relative max-w-md w-full">
      <div className="flex items-center bg-zinc-900 border border-zinc-800 rounded-xl px-3.5 md:px-5 h-12 md:h-14 transition-all duration-200 focus-within:border-[#C1121F] focus-within:ring-2 focus-within:ring-red-900/30">
        <IoMdSearch size={22} className="text-zinc-500 shrink-0" />

        <input
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder={
            mediaType === "movie"
              ? "Search movies..."
              : mediaType === "tv"
                ? "Search TV shows..."
                : mediaType === "person"
                  ? "Search people..."
                  : mediaType === "all"
                    ? "Search movies and TV shows..."
                    : "Search movies, TV shows, people..."
          }
          className="flex-1 ml-2 md:ml-3 bg-transparent outline-none text-white text-sm md:text-base placeholder:text-zinc-500 min-w-0"
        />

        {query.length > 0 && (
          <RxCross2
            size={22}
            onClick={() => setQuery("")}
            className="cursor-pointer text-zinc-500 hover:text-white transition shrink-0"
          />
        )}
      </div>
      {query.length > 0 && (
        <div className="absolute top-full left-0 mt-2 w-full max-h-[420px] overflow-y-auto rounded-2xl bg-[#18181b] border border-zinc-800 shadow-2xl z-50">
          {loading && (
            <div className="flex justify-center py-10">
              <div className="w-7 h-7 border-2 border-[#C1121F] border-t-transparent rounded-full animate-spin"></div>
            </div>
          )}

          {!loading && search.length > 0 && (
            <>
              {search.map((item) => {
                const type = item.media_type || mediaType;

                const displayPath =
                  type === "movie"
                    ? `/movies/details/${item.id}`
                    : type === "tv"
                      ? `/tv-shows/details/${item.id}`
                      : `/person/details/${item.id}`;

                return (
                  <Link
                    to={displayPath}
                    key={`${type}-${item.id}`}
                    className="flex items-center gap-3 sm:gap-4 px-3 sm:px-4 py-3 border-b border-zinc-800 hover:bg-zinc-800/60 transition-all duration-200"
                  >
                    <div className="w-[48px] h-[68px] sm:w-[62px] sm:h-[88px] rounded-xl overflow-hidden bg-zinc-800 shrink-0">
                      {item.poster_path ||
                      item.profile_path ||
                      item.backdrop_path ? (
                        <img
                          src={`https://image.tmdb.org/t/p/w200${
                            item.poster_path ||
                            item.profile_path ||
                            item.backdrop_path
                          }`}
                          alt={item.title || item.name}
                          className="w-full h-full object-cover"
                        />
                      ) : (
                        <div className="w-full h-full flex items-center justify-center">
                          <MdMovie size={28} className="text-zinc-600" />
                        </div>
                      )}
                    </div>

                    <div className="flex-1">
                      <h2 className="text-white text-lg font-semibold line-clamp-1">
                        {item.title || item.name}
                      </h2>
                      <div className="flex items-center flex-wrap gap-2 mt-2 text-sm">
                        <span className="flex items-center gap-1 text-zinc-400">
                          {type === "movie" ? (
                            <>
                              <MdMovie />
                              Movie
                            </>
                          ) : type === "tv" ? (
                            <>
                              <PiTelevisionFill />
                              TV Show
                            </>
                          ) : (
                            <>
                              <MdPeople />
                              Person
                            </>
                          )}
                        </span>

                        {type !== "person" && item.vote_count > 0 && (
                          <>
                            <span className="text-zinc-600">•</span>

                            <span className="flex items-center gap-1 text-yellow-400">
                              <FaStar size={12} />
                              {item.vote_average.toFixed(1)}
                            </span>
                          </>
                        )}

                        {type !== "person" &&
                          (item.release_date || item.first_air_date) && (
                            <>
                              <span className="text-zinc-600">•</span>

                              <span className="text-zinc-400">
                                {
                                  (
                                    item.release_date || item.first_air_date
                                  ).split("-")[0]
                                }
                              </span>
                            </>
                          )}
                      </div>
                    </div>
                  </Link>
                );
              })}
            </>
          )}

          {!loading && query.length > 0 && search.length === 0 && (
            <div className="py-12 px-6 text-center">
              <IoMdSearch size={45} className="mx-auto text-zinc-600" />

              <h2 className="mt-4 text-white text-lg font-semibold">
                No results found
              </h2>

              <p className="text-zinc-500 mt-2">
                Try searching with another keyword.
              </p>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default SearchBar;
