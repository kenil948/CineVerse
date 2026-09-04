import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  Link,
  Outlet,
  useLocation,
  useNavigate,
  useParams,
} from "react-router-dom";

import { MdKeyboardArrowLeft } from "react-icons/md";
import { LiaImdb } from "react-icons/lia";
import { IoMdHome } from "react-icons/io";
import { SiWikidata } from "react-icons/si";

import Loading from "../components/Loading";

import { getTv } from "../store/actions/tvShowActions";
import { removetv } from "../store/reducers/tvSlice";

import TvHero from "./TvHero";
import TvStats from "./TvState";
import WatchProviders from "../movieDetailsComponents/WatchProviders";
import ProductionCompanies from "../movieDetailsComponents/ProductionCompanies";

import MovieCastCards from "../components/MovieCastCards";
import HorizontalCards from "../components/templates/HorizontalCards";
import Seasons from "./Seasons";
import { FaArrowRightLong } from "react-icons/fa6";
import NotFound from "../components/NotFound";

const TvDetails = () => {
  const { id } = useParams();

  if (!/^\d+$/.test(id)) {
    return <NotFound />;
  }

  const navigate = useNavigate();
  const location = useLocation();
  const dispatch = useDispatch();

  const { info, loading, error } = useSelector((state) => state.tv);

  useEffect(() => {
    dispatch(getTv(id));

    return () => {
      dispatch(removetv());
    };
  }, [dispatch, id]);

  if (loading) return <Loading />;

  if (error) {
    return <NotFound />;
  }

  if (!info) return null;

  const seasonCount = info.detail.seasons.filter(
    (season) => season.season_number !== 0,
  ).length;

  return (
    <>
      <div
        style={{
          backgroundImage: `
              linear-gradient(
              90deg,
             rgba(0,0,0,.85) 0%,
             rgba(0,0,0,.85) 35%,
             rgba(0,0,0,.85) 65%,
             rgba(0,0,0,.85) 100%
                  
              ),
             url(https://image.tmdb.org/t/p/original${
               info.detail.backdrop_path || info.detail.poster_path
             })
`,
          backgroundPosition: "center top",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
        className="w-full pb-8 sm:pb-12 relative"
      >
        <div className="px-4 md:px-10 py-7">
          <nav className="flex items-center justify-between">
            <button
              onClick={() => {
                if (window.history.length > 1) {
                  navigate(-1);
                } else {
                  navigate(location.state?.from || "/");
                }
              }}
              className="group inline-flex items-center gap-0.5 text-zinc-400 hover:text-white transition-colors duration-300 mb-4 cursor-pointer"
            >
              <span className="transition-transform duration-300 group-hover:-translate-x-1">
                <MdKeyboardArrowLeft size={20} />
              </span>

              <span className="text-base font-medium">Back</span>
            </button>

            <div className="flex items-center gap-4 md:gap-8 text-xl md:text-3xl">
              {info.detail.imdb_id && (
                <a
                  href={`https://www.imdb.com/title/${info.detail.imdb_id}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  title="IMDb"
                >
                  <LiaImdb />
                </a>
              )}

              {info.detail.homepage && (
                <a
                  href={info.detail.homepage}
                  target="_blank"
                  rel="noopener noreferrer"
                  title="Homepage"
                >
                  <IoMdHome />
                </a>
              )}

              {info.externalids?.wikidata_id && (
                <a
                  href={`https://www.wikidata.org/wiki/${info.externalids.wikidata_id}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  title="WikiData"
                >
                  <SiWikidata />
                </a>
              )}
            </div>
          </nav>

          <TvHero tv={info.detail} director={info.director} />
          <TvStats tv={info.detail} />
        </div>
        <div className="absolute bottom-0 left-0 w-full h-20 bg-gradient-to-t from-[#111] to-transparent pointer-events-none"></div>
      </div>

      <div className="bg-[#111] px-4 md:px-10 py-10 space-y-10">
        <ProductionCompanies companies={info.detail.production_companies} />
        {info.detail.seasons.length > 0 && (
          <div>
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl md:text-3xl font-bold">Seasons</h2>

              <span className="text-zinc-400">{seasonCount} Seasons</span>
            </div>
            <Seasons data={info.detail.seasons} />
          </div>
        )}
        {info.cast?.length > 0 && (
          <section>
            <div className="flex items-center justify-between">
              <h2 className="text-xl md:text-3xl font-bold my-8">
                Top Cast ({info.cast.length})
              </h2>
              <button>
                <Link
                  to={`/tv-shows/details/${id}/cast`}
                  className="group px-5 py-3 rounded-xl bg-[#C1121F] hover:bg-[#A50F1A] font-medium flex items-center gap-2"
                >
                  <span>View All</span>

                  <FaArrowRightLong className="transition-transform duration-300 group-hover:translate-x-1" />
                </Link>
              </button>
            </div>
            <MovieCastCards data={info.cast.slice(0, 10)} />
          </section>
        )}
        <section>
          <h2 className="text-xl md:text-3xl font-bold mb-6">More Like This</h2>

          {info.recommendations.length > 0 || info.similar.length > 0 ? (
            <HorizontalCards
              data={
                info.recommendations.length > 0
                  ? info.recommendations
                  : info.similar
              }
            />
          ) : (
            <h3 className="text-zinc-400 text-xl">
              No recommendations available.
            </h3>
          )}
        </section>

        <WatchProviders providers={info.watchproviders} />
      </div>

      <Outlet />
    </>
  );
};

export default TvDetails;
