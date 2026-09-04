import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useLocation, useParams } from "react-router-dom";

import { MdKeyboardArrowLeft } from "react-icons/md";

import Loading from "../components/Loading";
import NotFound from "../components/NotFound";

import PersonHero from "./PersonHero";
import Biography from "./PersonBiography";
import SocialLinks from "./PersonSocials";
import PersonGallery from "./PersonGallery";

import { getPerson } from "../store/actions/personAction";
import { removeperson } from "../store/reducers/personSlice";
import PersonFilmography from "./PersonFilmography";

const PersonDetails = () => {
  const { id } = useParams();
  const dispatch = useDispatch();

  const navigate = useNavigate();
  const location = useLocation();
  console.log(location.state);

  const { info, loading, error } = useSelector((state) => state.person);

  useEffect(() => {
    dispatch(getPerson(id));

    return () => {
      dispatch(removeperson());
    };
  }, [dispatch, id]);

  if (!/^\d+$/.test(id)) {
    return <NotFound />;
  }
  if (loading) return <Loading />;

  if (error) return <NotFound />;

  if (!info) return null;

  return (
    <>
      <div
        style={{
          backgroundImage: `
             linear-gradient(
  90deg,
  rgba(0,0,0,.97) 0%,
  rgba(0,0,0,.94) 30%,
  rgba(0,0,0,.85) 60%,
  rgba(0,0,0,.97) 100%
),
             url(https://image.tmdb.org/t/p/original${
               info.details.profile_path
             })
`,
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
        className="w-full pb-4 sm:pb-12 relative"
      >
        <div className="px-4 md:px-10 py-7">
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

          <PersonHero person={info.details} />
          <SocialLinks externalids={info.externalids} />
        </div>

        <div className="absolute bottom-0 left-0 w-full h-20 bg-gradient-to-t from-[#111] to-transparent pointer-events-none"></div>
      </div>

      <div className="bg-[#111] py-6 md:py-10 space-y-6 md:space-y-10">
        <Biography biography={info.details.biography} />

        <PersonFilmography
          name={info.details.name}
          department={info.details.known_for_department}
          movies={info.movies}
          tvShows={info.tvShows}
          directedMovies={info.directedMovies}
          directedTvShows={info.directedTvShows}
        />

        <PersonGallery images={info.images} />
      </div>
    </>
  );
};

export default PersonDetails;
