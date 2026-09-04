import React, { useEffect, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import Dropdown from "../templates/Dropdown";
import SearchBar from "../SearchBar";
import axios from "../../Axios";
import GridCards from "../GridCards";
import Loading from "../Loading";
import InfiniteScroll from "react-infinite-scroll-component";
import { MdKeyboardArrowLeft } from "react-icons/md";
import LoadMoreLoader from "../LoadMoreLoader";
const Movies = () => {
  const navigate = useNavigate();
  const [searchParams, setSearchParams] = useSearchParams();
  const category = searchParams.get("category") || "now_playing";

  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [hasMore, setHasMore] = useState(true);
  const [page, setPage] = useState(1);

  const fetchMovies = async (currentPage = page) => {
    try {
      setLoading(true);
      const { data } = await axios.get(`movie/${category}?page=${currentPage}`);

      if (data.page >= data.total_pages) {
        setHasMore(false);
      }

      setMovies((prev) => {
        const merged = [...prev, ...data.results];
        return merged.filter((item, index, self) => {
          return (
            index ===
            self.findIndex((current) => {
              return current.id === item.id;
            })
          );
        });
      });
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  const loadMore = () => {
    setPage((prev) => prev + 1);
  };

  useEffect(() => {
    setMovies([]);
    setHasMore(true);
    setPage(1);

    fetchMovies(1);
  }, [category]);

  useEffect(() => {
    if (page > 1) {
      fetchMovies(page);
    }
  }, [page]);

  if (loading && movies.length === 0) {
    return <Loading />;
  }

  let title =
    category === "now_playing"
      ? "Now Playing Movies"
      : category === "top_rated"
        ? "Top Rated Movies"
        : category === "popular"
          ? "Popular Movies"
          : "Upcoming Movies";

  const subtitle =
    category === "now_playing"
      ? "Movies currently playing in theatres."
      : category === "top_rated"
        ? "Explore the highest-rated movies of all time."
        : category === "popular"
          ? "Discover the most popular movies right now."
          : "See the latest movies coming soon.";

  return (
    <div className="w-full px-4 md:px-10 py-7">
      <button
        onClick={() => navigate("/")}
        className="group inline-flex items-center gap-0.5 text-zinc-400 hover:text-white transition-colors duration-300 mb-3 cursor-pointer"
      >
        <span className="transition-transform duration-300 group-hover:-translate-x-1">
          <MdKeyboardArrowLeft size={20} />
        </span>
        <span className="text-base font-medium">Back</span>
      </button>
      <div className="sticky top-0 z-40 py-4 bg-[#222222]/90 backdrop-blur-md">
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
          <div className="w-full lg:w-auto lg:max-w-md">
            <h1 className="text-xl md:text-3xl font-bold text-white">{title}</h1>

            <p className="text-zinc-400 mt-1 md:mt-2 text-sm md:text-base">{subtitle}</p>
          </div>

          <div className="w-full lg:flex-1 lg:ml-8 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3">
            <SearchBar mediaType="movie" />
            <div className="flex items-center gap-2 sm:gap-3">
              <Dropdown
                value={category}
                options={[
                  { label: "Top Rated", value: "top_rated" },
                  { label: "Popular", value: "popular" },
                  { label: "Now Playing", value: "now_playing" },
                  { label: "Upcoming", value: "upcoming" },
                ]}
                category={(value) => setSearchParams({ category: value })}
              />
            </div>
          </div>
        </div>
      </div>
      <div className="mt-6">
        <InfiniteScroll
          dataLength={movies.length}
          next={loadMore}
          hasMore={hasMore}
          loader={<LoadMoreLoader />}
          endMessage={
            <div className="py-10 text-center">
              <p className="text-zinc-400">🎬 That's everything we've got.</p>

              <p className="text-sm text-zinc-500 mt-1">
                Explore another category for more movies.
              </p>
            </div>
          }
        >
          <GridCards mediaType="movie" data={movies} />
        </InfiniteScroll>
      </div>
    </div>
  );
};

export default Movies;
