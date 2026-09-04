import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FaChevronRight } from "react-icons/fa6";
import Sidebar from "./templates/Sidebar";
import Topbar from "./templates/Topbar";
import Header from "./templates/Header";
import axios from "../Axios";
import Dropdown from "./templates/Dropdown";
import HorizontalCards from "./templates/HorizontalCards";
import Loading from "./Loading";

const Home = () => {
  const [heroMovie, setHeroMovie] = useState(null);

  // Trending
  const [trendings, setTrendings] = useState(null);
  const [category, setCategory] = useState("all");
  const [loadingTrending, setLoadingTrending] = useState(false);

  // Popular
  const [popular, setPopular] = useState(null);
  const [popularCategory, setPopularCategory] = useState("movie");
  const [loadingPopular, setLoadingPopular] = useState(false);

  // Movies
  const [movies, setMovies] = useState(null);
  const [movieCategory, setMovieCategory] = useState("now_playing");
  const [loadingMovies, setLoadingMovies] = useState(false);

  // TV Shows
  const [tvShows, setTvShows] = useState(null);
  const [tvShowCategory, setTvShowCategory] = useState("popular");
  const [loadingTvShows, setLoadingTvShows] = useState(false);

  const getHeroMovie = async () => {
    try {
      const { data } = await axios.get("/trending/all/week");
      const randomMovie =
        data.results[Math.floor(Math.random() * data.results.length)];
      setHeroMovie(randomMovie);
    } catch (error) {
      console.log(error);
    }
  };

  const getTrendings = async () => {
    try {
      if (trendings) setLoadingTrending(true);
      const { data } = await axios.get(`/trending/${category}/week`);
      setTrendings(data.results);
    } catch (error) {
      console.log(error);
    } finally {
      setLoadingTrending(false);
    }
  };

  const getPopular = async () => {
    try {
      if (popular) setLoadingPopular(true);
      const { data } = await axios.get(`/${popularCategory}/popular`);
      const mapped = data.results.map((item) => ({
        ...item,
        media_type: item.media_type || popularCategory,
      }));
      setPopular(mapped);
    } catch (error) {
      console.log(error);
    } finally {
      setLoadingPopular(false);
    }
  };

  const getMovies = async () => {
    try {
      if (movies) setLoadingMovies(true);
      const { data } = await axios.get(`/movie/${movieCategory}`);
      const mapped = data.results.map((item) => ({
        ...item,
        media_type: "movie",
      }));
      setMovies(mapped);
    } catch (error) {
      console.log(error);
    } finally {
      setLoadingMovies(false);
    }
  };

  const getTvShows = async () => {
    try {
      if (tvShows) setLoadingTvShows(true);
      const { data } = await axios.get(`/tv/${tvShowCategory}`);
      const mapped = data.results.map((item) => ({
        ...item,
        media_type: "tv",
      }));
      setTvShows(mapped);
    } catch (error) {
      console.log(error);
    } finally {
      setLoadingTvShows(false);
    }
  };

  useEffect(() => {
    !heroMovie && getHeroMovie();
  }, []);

  useEffect(() => {
    getTrendings();
  }, [category]);

  useEffect(() => {
    getPopular();
  }, [popularCategory]);

  useEffect(() => {
    getMovies();
  }, [movieCategory]);

  useEffect(() => {
    getTvShows();
  }, [tvShowCategory]);

  if (!heroMovie || !trendings || !popular || !movies || !tvShows) {
    return <Loading />;
  }

  return (
    <div className="bg-[#18181b]">
      <Sidebar />
      <main className="ml-0 lg:ml-[290px] min-h-screen p-4 md:p-7 pt-18 sm:pt-18 md:pt-18 lg:pt-5 pb-12 sm:pb-16 overflow-y-auto">
        <Topbar />
        <Header data={heroMovie} />

        {/* Trending Section */}
        <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between gap-4 mt-8 md:mt-10 mb-5">
          <div>
            <p className="text-xs uppercase tracking-[3px] text-zinc-500">
              Weekly Collection
            </p>
            <h2 className="text-xl md:text-3xl font-bold text-white mt-1">
              Trending
            </h2>
          </div>

          <div className="flex items-center gap-3 sm:gap-4 w-full sm:w-auto justify-between sm:justify-end">
            <Dropdown
              value={category}
              options={[
                { label: "All", value: "all" },
                { label: "Movie", value: "movie" },
                { label: "TV Show", value: "tv" },
              ]}
              category={setCategory}
            />
            <Link
              to="/trending"
              className="px-4 py-3 rounded-xl bg-zinc-900 border border-zinc-800 hover:border-zinc-700 text-zinc-300 hover:text-white font-medium text-sm transition-all duration-200 flex items-center gap-1.5 shrink-0 group active:scale-[.98]"
            >
              <span>See All</span>
              <FaChevronRight
                size={12}
                className="group-hover:translate-x-0.5 transition-transform text-zinc-400 group-hover:text-white"
              />
            </Link>
          </div>
        </div>
        <div
          className={`transition-opacity duration-200 ${
            loadingTrending ? "opacity-50 pointer-events-none" : "opacity-100"
          }`}
        >
          <HorizontalCards data={trendings} />
        </div>

        {/* Popular Section */}
        <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between gap-4 mt-10 mb-5">
          <div>
            <p className="text-xs uppercase tracking-[3px] text-zinc-500">
              POPULAR CHOICE
            </p>
            <h2 className="text-xl md:text-3xl font-bold text-white mt-1">
              Popular
            </h2>
          </div>

          <div className="flex items-center gap-3 sm:gap-4 w-full sm:w-auto justify-between sm:justify-end">
            <Dropdown
              value={popularCategory}
              options={[
                { label: "Movie", value: "movie" },
                { label: "TV Show", value: "tv" },
              ]}
              category={setPopularCategory}
            />
            <Link
              to="/popular"
              className="px-4 py-3 rounded-xl bg-zinc-900 border border-zinc-800 hover:border-zinc-700 text-zinc-300 hover:text-white font-medium text-sm transition-all duration-200 flex items-center gap-1.5 shrink-0 group active:scale-[.98]"
            >
              <span>See All</span>
              <FaChevronRight
                size={12}
                className="group-hover:translate-x-0.5 transition-transform text-zinc-400 group-hover:text-white"
              />
            </Link>
          </div>
        </div>
        <div
          className={`transition-opacity duration-200 ${
            loadingPopular ? "opacity-50 pointer-events-none" : "opacity-100"
          }`}
        >
          <HorizontalCards data={popular} />
        </div>

        {/* Movies Section */}
        <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between gap-4 mt-10 mb-5">
          <div>
            <p className="text-xs uppercase tracking-[3px] text-zinc-500">
              DISCOVER MOVIES
            </p>
            <h2 className="text-xl md:text-3xl font-bold text-white mt-1">
              Movies
            </h2>
          </div>

          <div className="flex items-center gap-3 sm:gap-4 w-full sm:w-auto justify-between sm:justify-end">
            <Dropdown
              value={movieCategory}
              options={[
                { label: "Now Playing", value: "now_playing" },
                { label: "Popular", value: "popular" },
                { label: "Top Rated", value: "top_rated" },
                { label: "Upcoming", value: "upcoming" },
              ]}
              category={setMovieCategory}
            />
            <Link
              to="/movies"
              className="px-4 py-3 rounded-xl bg-zinc-900 border border-zinc-800 hover:border-zinc-700 text-zinc-300 hover:text-white font-medium text-sm transition-all duration-200 flex items-center gap-1.5 shrink-0 group active:scale-[.98]"
            >
              <span>See All</span>
              <FaChevronRight
                size={12}
                className="group-hover:translate-x-0.5 transition-transform text-zinc-400 group-hover:text-white"
              />
            </Link>
          </div>
        </div>
        <div
          className={`transition-opacity duration-200 ${
            loadingMovies ? "opacity-50 pointer-events-none" : "opacity-100"
          }`}
        >
          <HorizontalCards data={movies} />
        </div>

        {/* TV Shows Section */}
        <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between gap-4 mt-10 mb-5">
          <div>
            <p className="text-xs uppercase tracking-[3px] text-zinc-500">
              TELEVISION SERIES
            </p>
            <h2 className="text-xl md:text-3xl font-bold text-white mt-1">
              TV Shows
            </h2>
          </div>

          <div className="flex items-center gap-3 sm:gap-4 w-full sm:w-auto justify-between sm:justify-end">
            <Dropdown
              value={tvShowCategory}
              options={[
                { label: "Airing Today", value: "airing_today" },
                { label: "On The Air", value: "on_the_air" },
                { label: "Popular", value: "popular" },
                { label: "Top Rated", value: "top_rated" },
              ]}
              category={setTvShowCategory}
            />
            <Link
              to="/tv-shows"
              className="px-4 py-3 rounded-xl bg-zinc-900 border border-zinc-800 hover:border-zinc-700 text-zinc-300 hover:text-white font-medium text-sm transition-all duration-200 flex items-center gap-1.5 shrink-0 group active:scale-[.98]"
            >
              <span>See All</span>
              <FaChevronRight
                size={12}
                className="group-hover:translate-x-0.5 transition-transform text-zinc-400 group-hover:text-white"
              />
            </Link>
          </div>
        </div>
        <div
          className={`transition-opacity duration-200 ${
            loadingTvShows ? "opacity-50 pointer-events-none" : "opacity-100"
          }`}
        >
          <HorizontalCards data={tvShows} />
        </div>
      </main>
    </div>
  );
};

export default Home;
