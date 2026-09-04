import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Dropdown from "../templates/Dropdown";
import SearchBar from "../SearchBar";
import axios from "../../Axios";
import GridCards from "../GridCards";
import Loading from "../Loading";
import InfiniteScroll from "react-infinite-scroll-component";
import { MdKeyboardArrowLeft } from "react-icons/md";
import LoadMoreLoader from "../LoadMoreLoader";
import { useSearchParams } from "react-router-dom";

const TvShows = () => {
  const navigate = useNavigate();

  const [searchParams, setSearchParams] = useSearchParams();
  const category = searchParams.get("category") || "airing_today";
  const [tvShows, setTvShows] = useState([]);
  const [loading, setLoading] = useState(true);
  const [hasMore, setHasMore] = useState(true);
  const [page, setPage] = useState(1);

  const fetchTvShows = async (currentPage = page) => {
    try {
      setLoading(true);
      const { data } = await axios.get(`tv/${category}?page=${currentPage}`);

      if (data.page >= data.total_pages) {
        setHasMore(false);
      }

      setTvShows((prev) => {
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
    setTvShows([]);
    setHasMore(true);
    setPage(1);

    fetchTvShows(1);
  }, [category]);

  useEffect(() => {
    if (page > 1) {
      fetchTvShows(page);
    }
  }, [page]);

  if (loading && tvShows.length === 0) {
    return <Loading />;
  }

  let title =
    category === "airing_today"
      ? "Airing Today TV Shows"
      : category === "on_the_air"
        ? "On The Air TV Shows"
        : category === "popular"
          ? "Popular TV Shows"
          : "Top Rated TV Shows";

  const subtitle =
    category === "airing_today"
      ? "Catch the latest episodes airing today."
      : category === "on_the_air"
        ? "Stay up to date with shows currently on the air."
        : category === "popular"
          ? "Discover the most popular TV shows right now."
          : "Explore the highest-rated TV shows of all time.";

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
            <SearchBar mediaType="tv" />
            <div className="flex items-center gap-2 sm:gap-3">
              <Dropdown
                value={category}
                options={[
                  { label: "Airing Today", value: "airing_today" },
                  { label: "On The Air", value: "on_the_air" },
                  { label: "Popular", value: "popular" },
                  { label: "Top Rated", value: "top_rated" },
                ]}
                category={(value)=> setSearchParams({ category: value })}
              />
            </div>
          </div>
        </div>
      </div>
      <div className="mt-6">
        <InfiniteScroll
          dataLength={tvShows.length}
          next={loadMore}
          hasMore={hasMore}
          loader={<LoadMoreLoader />}
          endMessage={
            <div className="py-10 text-center">
              <p className="text-zinc-400">📺 That's everything we've got.</p>

              <p className="text-sm text-zinc-500 mt-1">
                Explore another category to discover more shows.
              </p>
            </div>
          }
        >
          <GridCards mediaType="tv" data={tvShows} />
        </InfiniteScroll>
      </div>
    </div>
  );
};

export default TvShows;
