import { useNavigate } from "react-router-dom";
import { MdKeyboardArrowLeft } from "react-icons/md";
import { RiFilmLine } from "react-icons/ri";
import { IoMdHome } from "react-icons/io";

const NotFound = () => {
  const navigate = useNavigate();

  return (
    <div className="relative min-h-screen overflow-hidden bg-[#0B0B0B] flex items-center justify-center px-6">
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none">
        <h1 className="text-[20rem] md:text-[28rem] font-black text-white/[0.015] leading-none">
          404
        </h1>
      </div>

      <div className="absolute w-[700px] h-[700px] rounded-full bg-[#C1121F]/15 blur-[220px]" />

      <div className="relative z-10 text-center max-w-xl">
        <p className="uppercase tracking-[0.45em] text-zinc-600 text-xs mb-8">
          CINEVERSE
        </p>

        <RiFilmLine
          size={50}
          className="mx-auto text-[#C1121F] mb-5 animate-pulse"
        />

        <h1 className="text-[8rem] md:text-[10rem] font-black leading-none text-[#C1121F]">
          404
        </h1>

        <h2 className="text-2xl md:text-4xl font-bold text-white mt-5">
          Lost In The CineVerse
        </h2>

        <p className="text-zinc-400 text-lg mt-4 leading-relaxed">
          The movie or TV show you're looking for
          <br />
          couldn't be found in CineVerse.
        </p>

        <div className="flex gap-5 justify-center">
          <button
            onClick={() => {
              if (window.history.length > 1) {
                navigate(-1);
              } else {
                navigate("/");
              }
            }}
            className="group mt-10 inline-flex items-center gap-2 px-7 py-3.5 rounded-xl bg-[#C1121F] hover:bg-[#A50F1A] shadow-lg shadow-[#C1121F]/30 hover:shadow-[#C1121F]/50 transition-all duration-300 cursor-pointer"
          >
            <MdKeyboardArrowLeft
              size={22}
              className="transition-transform duration-300 group-hover:-translate-x-1"
            />

            <span className="font-medium">Go Back</span>
          </button>
          <button
            onClick={() => {
              navigate("/");
            }}
            className="group mt-10 inline-flex items-center gap-2 px-7 py-3.5 rounded-xl bg-[#C1121F] hover:bg-[#A50F1A] shadow-lg shadow-[#C1121F]/30 hover:shadow-[#C1121F]/50 transition-all duration-300 cursor-pointer"
          >
            <IoMdHome
              size={20}
              className="transition-transform duration-300 group-hover:scale-110"
            />

            <span className="font-medium">Home</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
