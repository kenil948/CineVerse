import React, { use, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { getTv } from "../store/actions/tvShowActions";
import { MdKeyboardArrowLeft } from "react-icons/md";
import MovieCastCards from "../components/MovieCastCards";

const TvShowsCast = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { id } = useParams();

  const { info } = useSelector((state) => state.tv);

  useEffect(() => {
    dispatch(getTv(id));
  }, [id]);

  return (
    <div className="w-full min-h-screen px-4 md:px-10 py-7">
      <button
        onClick={() => navigate(-1)}
        className="group inline-flex items-center gap-0.5 text-zinc-400 hover:text-white transition-colors duration-300 mb-3 cursor-pointer"
      >
        <span className="transition-transform duration-300 group-hover:-translate-x-1">
          <MdKeyboardArrowLeft size={20} />
        </span>
        <span className="text-base font-medium">Back</span>
      </button>
      <div className="py-4">
        <MovieCastCards data={info?.cast} isGrid={true} />
      </div>
    </div>
  );
};

export default TvShowsCast;
