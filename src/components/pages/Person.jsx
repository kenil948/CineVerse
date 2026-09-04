import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import SearchBar from "../SearchBar";
import axios from "../../Axios";
import Loading from "../Loading";
import InfiniteScroll from "react-infinite-scroll-component";
import { MdKeyboardArrowLeft } from "react-icons/md";
import LoadMoreLoader from "../LoadMoreLoader";
import PersonCards from "../PersonCards";

const Person = () => {
  const navigate = useNavigate();

  const [people, setPeople] = useState([]);
  const [loading, setLoading] = useState(true);
  const [hasMore, setHasMore] = useState(true);
  const [page, setPage] = useState(1);

  const fetchPeople = async (currentPage = page) => {
    try {
      setLoading(true);

      const { data } = await axios.get(`person/popular?page=${currentPage}`);

      if (data.page >= data.total_pages) {
        setHasMore(false);
      }

      setPeople((prev) => {
        const merged = [...prev, ...data.results];

        return merged.filter(
          (item, index, self) =>
            index === self.findIndex((current) => current.id === item.id),
        );
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
    setPeople([]);
    setHasMore(true);
    setPage(1);

    fetchPeople(1);
  }, []);

  useEffect(() => {
    if (page > 1) {
      fetchPeople(page);
    }
  }, [page]);

  if (loading && people.length === 0) {
    return <Loading />;
  }

  return (
    <div className="w-full px-4 md:px-10 py-7">
      <button
        onClick={() => navigate("/")}
        className="group inline-flex items-center gap-0.5 text-zinc-400 hover:text-white transition-colors duration-300 mb-4 cursor-pointer"
      >
        <span className="transition-transform duration-300 group-hover:-translate-x-1">
          <MdKeyboardArrowLeft size={20} />
        </span>

        <span className="text-base font-medium">Back</span>
      </button>

      <div className="sticky top-0 z-40 py-4 bg-[#222222]/90 backdrop-blur-md">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="w-full sm:max-w-sm">
            <h1 className="text-xl md:text-3xl font-bold text-white">People</h1>

            <p className="mt-1 md:mt-2 text-zinc-400 text-sm md:text-base leading-6 md:leading-7">
              Meet the actors, directors and creators behind your favourite
              movies and TV shows.
            </p>
          </div>

          <div className="w-full sm:w-[350px] md:w-[400px] flex justify-end">
            <SearchBar mediaType="person" />
          </div>
        </div>
      </div>

      <div className="mt-5">
        <InfiniteScroll
          dataLength={people.length}
          next={loadMore}
          hasMore={hasMore}
          loader={<LoadMoreLoader />}
          endMessage={
            <div className="py-10 text-center">
              <p className="text-zinc-400 text-base">
                👥 You've reached the end.
              </p>

              <p className="mt-1 text-sm text-zinc-500">
                Search for another actor, director or creator.
              </p>
            </div>
          }
        >
          <PersonCards data={people} />
        </InfiniteScroll>
      </div>
    </div>
  );
};

export default Person;
