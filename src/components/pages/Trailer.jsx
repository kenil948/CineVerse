import { IoClose } from "react-icons/io5";
import ReactPlayer from "react-player";
import { useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";

const Trailer = () => {
  const Navigate = useNavigate();
  const { pathname } = useLocation();
  const category = pathname.includes("movie") ? "movie" : "tv";

  const ytVideo = useSelector((state) => state[category].info.video);

  return (
    <div className="fixed inset-0 z-[999] bg-black/90 flex items-center justify-center p-4">
      {ytVideo?.key ? (
        <div className="w-full max-w-5xl aspect-video rounded-2xl overflow-hidden shadow-2xl">
          <ReactPlayer
            src={`https://www.youtube.com/watch?v=${ytVideo.key}`}
            controls
            width="100%"
            height="100%"
          />
        </div>
      ) : (
        <h1 className="text-xl md:text-4xl text-zinc-400">Trailer not available</h1>
      )}
      <button
        onClick={() => Navigate(-1)}
        className="absolute right-4 top-4 md:right-[8%] md:top-[5%] text-zinc-400 hover:text-white transition-colors duration-300 cursor-pointer z-10"
      >
        <IoClose size={32} />
      </button>
    </div>
  );
};

export default Trailer;
