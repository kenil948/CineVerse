import { useLocation, useNavigate } from "react-router-dom";
import {
  MdKeyboardArrowLeft,
  MdMovie,
  MdPalette,
  MdRefresh,
  MdSmartphone,
  MdFlashOn,
  MdArrowForward,
} from "react-icons/md";
import { PiTelevisionFill } from "react-icons/pi";
import {
  FaStar,
  FaUserFriends,
  FaPlay,
  FaFilm,
  FaTv,
  FaUserNinja,
  FaYoutube,
} from "react-icons/fa";
import { IoSparkles } from "react-icons/io5";
import {
  SiReact,
  SiVite,
  SiTailwindcss,
  SiRedux,
  SiReactrouter,
} from "react-icons/si";

const About = () => {
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <div className="min-h-screen bg-[#18181b] text-white selection:bg-[#C1121F] selection:text-white">
      {/* Container Wrapper */}
      <div className="px-4 md:px-10 py-7 max-w-7xl mx-auto">
        {/* Back Button matching MovieDetails, TvDetails & PersonDetails */}
        <button
          onClick={() => {
            if (window.history.length > 1) {
              navigate(-1);
            } else {
              navigate(location.state?.from || "/");
            }
          }}
          className="group inline-flex items-center gap-0.5 text-zinc-400 hover:text-white transition-colors duration-300 mb-6 cursor-pointer"
        >
          <span className="transition-transform duration-300 group-hover:-translate-x-1">
            <MdKeyboardArrowLeft size={20} />
          </span>
          <span className="text-base font-medium">Back</span>
        </button>

        {/* ================================================== */}
        {/* SECTION 1 — HERO */}
        {/* ================================================== */}
        <section className="relative py-8 md:py-16 overflow-hidden text-center">
          {/* Soft Radial Ambient Glow */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] md:w-[700px] h-[350px] md:h-[450px] bg-[#C1121F]/10 blur-[160px] rounded-full pointer-events-none" />

          <div className="relative z-10 max-w-4xl mx-auto">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#C1121F]/15 border border-[#C1121F]/30 text-[#C1121F] text-xs sm:text-sm font-semibold tracking-wider uppercase mb-6">
              <IoSparkles size={16} />
              <span>Welcome to CineVerse</span>
            </div>

            <h1 className="text-3xl sm:text-5xl md:text-6xl font-black text-white leading-tight tracking-tight">
              Discover Movies. <br className="hidden sm:inline" />
              <span>Explore Stories.</span> <br className="hidden sm:inline" />
              <span className="text-[#C1121F]">Feel the Cinema.</span>
            </h1>

            <p className="mt-6 max-w-2xl mx-auto text-base sm:text-lg md:text-xl text-zinc-300 leading-relaxed font-normal">
              CineVerse brings movies, television, actors, creators and trailers
              together into one beautifully crafted experience.
            </p>

            <div className="mt-8 flex items-center justify-center gap-4">
              <button
                onClick={() => navigate("/movies")}
                className="group flex items-center gap-3 px-8 py-3.5 rounded-xl bg-[#C1121F] hover:bg-[#A50F1A] text-white font-semibold text-base transition-all duration-300 active:scale-95 cursor-pointer"
              >
                <FaPlay size={14} />
                <span>Explore Movies</span>
                <MdArrowForward
                  size={20}
                  className="transition-transform duration-300 group-hover:translate-x-1"
                />
              </button>
            </div>
          </div>
        </section>

        {/* ================================================== */}
        {/* SECTION 2 — OUR MISSION */}
        {/* ================================================== */}
        <section className="py-12 md:py-16 border-t border-zinc-800/60">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-center">
            {/* Left Column: Content */}
            <div>
              <div className="flex items-center gap-2 text-[#C1121F] font-semibold text-xs sm:text-sm tracking-[0.2em] uppercase mb-3">
                <div className="h-px w-8 bg-[#C1121F]" />
                <span>Our Mission</span>
              </div>

              <h2 className="text-2xl sm:text-4xl font-bold leading-tight text-white">
                Discovering Entertainment, Effortlessly.
              </h2>

              <p className="mt-5 text-base sm:text-lg text-zinc-300 leading-relaxed">
                At CineVerse, we believe finding a great movie or TV show should be
                just as thrilling as watching it. We replace fragmented search with
                one unified, high-performance platform.
              </p>

              <p className="mt-4 text-sm sm:text-base text-zinc-400 leading-relaxed">
                Whether you are tracking trending releases, uncovering hidden
                classics, or meeting the creative minds behind the screen,
                CineVerse delivers a clean and elegant experience built for film
                enthusiasts.
              </p>

              <div className="mt-6 flex flex-wrap gap-3">
                <span className="px-3.5 py-1.5 rounded-full bg-zinc-900 border border-zinc-800 text-zinc-300 text-xs sm:text-sm font-medium">
                  Curated Discovery
                </span>
                <span className="px-3.5 py-1.5 rounded-full bg-zinc-900 border border-zinc-800 text-zinc-300 text-xs sm:text-sm font-medium">
                  Instant Trailers
                </span>
                <span className="px-3.5 py-1.5 rounded-full bg-zinc-900 border border-zinc-800 text-zinc-300 text-xs sm:text-sm font-medium">
                  TMDB Integration
                </span>
              </div>
            </div>

            {/* Right Column: Glassmorphism Card Showcase */}
            <div className="rounded-2xl bg-zinc-900/80 border border-zinc-800 p-6 sm:p-8 shadow-xl relative overflow-hidden">
              <div className="flex items-center justify-between border-b border-zinc-800/80 pb-4 mb-5">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-500/80" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                  <div className="w-3 h-3 rounded-full bg-green-500/80" />
                </div>
                <span className="text-xs font-mono text-zinc-500">
                  CineVerse Platform
                </span>
              </div>

              <div className="space-y-3.5">
                <div className="p-4 rounded-xl bg-zinc-800/60 border border-zinc-700/40 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-12 rounded-lg bg-[#C1121F]/20 flex items-center justify-center text-[#C1121F]">
                      <FaFilm size={20} />
                    </div>
                    <div>
                      <h4 className="font-semibold text-white text-sm">
                        Trending Movies & TV
                      </h4>
                      <p className="text-xs text-zinc-400">Real-time data sync</p>
                    </div>
                  </div>
                  <span className="px-2.5 py-0.5 rounded-full bg-[#C1121F] text-white text-xs font-bold">
                    LIVE
                  </span>
                </div>

                <div className="p-3.5 rounded-xl bg-zinc-800/30 border border-zinc-800/50 flex items-center gap-3 text-zinc-300 text-xs sm:text-sm">
                  <FaStar className="text-yellow-400 shrink-0" />
                  <span>Official Trailers & Complete Cast Profiles</span>
                </div>

                <div className="p-3.5 rounded-xl bg-zinc-800/30 border border-zinc-800/50 flex items-center gap-3 text-zinc-300 text-xs sm:text-sm">
                  <IoSparkles className="text-[#C1121F] shrink-0" />
                  <span>Responsive Cinematic Interface</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ================================================== */}
        {/* SECTION 3 — FEATURE CARDS */}
        {/* ================================================== */}
        <section className="py-12 md:py-16 border-t border-zinc-800/60">
          <div className="text-center max-w-3xl mx-auto mb-10">
            <div className="inline-flex items-center justify-center gap-2 text-[#C1121F] font-semibold text-xs sm:text-sm tracking-[0.2em] uppercase">
              <div className="h-px w-6 bg-[#C1121F]" />
              <span>Core Features</span>
              <div className="h-px w-6 bg-[#C1121F]" />
            </div>
            <h2 className="mt-3 text-2xl sm:text-4xl font-bold text-white">
              Explore Cinema Your Way
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {/* Card 1: Movies */}
            <div className="group rounded-2xl bg-zinc-900/60 border border-zinc-800 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-[#C1121F]/40 hover:bg-zinc-900 hover:shadow-xl flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-xl bg-[#C1121F]/15 flex items-center justify-center text-[#C1121F] mb-4">
                  <MdMovie size={26} />
                </div>
                <h3 className="text-xl font-bold text-white">🎬 Movies</h3>
                <p className="mt-2 text-zinc-400 text-sm leading-relaxed">
                  Discover thousands of movies from every genre.
                </p>
              </div>
            </div>

            {/* Card 2: TV Shows */}
            <div className="group rounded-2xl bg-zinc-900/60 border border-zinc-800 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-[#C1121F]/40 hover:bg-zinc-900 hover:shadow-xl flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-xl bg-[#C1121F]/15 flex items-center justify-center text-[#C1121F] mb-4">
                  <PiTelevisionFill size={26} />
                </div>
                <h3 className="text-xl font-bold text-white">📺 TV Shows</h3>
                <p className="mt-2 text-zinc-400 text-sm leading-relaxed">
                  Explore trending and popular television series.
                </p>
              </div>
            </div>

            {/* Card 3: People */}
            <div className="group rounded-2xl bg-zinc-900/60 border border-zinc-800 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-[#C1121F]/40 hover:bg-zinc-900 hover:shadow-xl flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-xl bg-[#C1121F]/15 flex items-center justify-center text-[#C1121F] mb-4">
                  <FaUserFriends size={24} />
                </div>
                <h3 className="text-xl font-bold text-white">🎭 People</h3>
                <p className="mt-2 text-zinc-400 text-sm leading-relaxed">
                  Learn about actors, directors and creators.
                </p>
              </div>
            </div>

            {/* Card 4: Trailers */}
            <div className="group rounded-2xl bg-zinc-900/60 border border-zinc-800 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-[#C1121F]/40 hover:bg-zinc-900 hover:shadow-xl flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-xl bg-[#C1121F]/15 flex items-center justify-center text-[#C1121F] mb-4">
                  <FaPlay size={20} className="ml-0.5" />
                </div>
                <h3 className="text-xl font-bold text-white">▶ Trailers</h3>
                <p className="mt-2 text-zinc-400 text-sm leading-relaxed">
                  Watch official trailers instantly.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ================================================== */}
        {/* SECTION 4 — PLATFORM HIGHLIGHTS */}
        {/* ================================================== */}
        <section className="py-12 md:py-16 border-t border-zinc-800/60">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {/* Highlight 1 */}
            <div className="rounded-2xl bg-zinc-900/50 border border-zinc-800 p-6 transition-all duration-300 hover:border-zinc-700 hover:bg-zinc-900/80">
              <div className="w-10 h-10 rounded-lg bg-[#C1121F]/15 flex items-center justify-center text-[#C1121F] mb-3">
                <FaFilm size={20} />
              </div>
              <h3 className="text-lg font-bold text-white">Movie Discovery</h3>
              <p className="mt-1 text-xs text-zinc-400 leading-relaxed">
                Filter and browse by genre, popularity, rating, and year.
              </p>
            </div>

            {/* Highlight 2 */}
            <div className="rounded-2xl bg-zinc-900/50 border border-zinc-800 p-6 transition-all duration-300 hover:border-zinc-700 hover:bg-zinc-900/80">
              <div className="w-10 h-10 rounded-lg bg-[#C1121F]/15 flex items-center justify-center text-[#C1121F] mb-3">
                <FaTv size={20} />
              </div>
              <h3 className="text-lg font-bold text-white">TV Discovery</h3>
              <p className="mt-1 text-xs text-zinc-400 leading-relaxed">
                Explore current series, season breakdowns, and network shows.
              </p>
            </div>

            {/* Highlight 3 */}
            <div className="rounded-2xl bg-zinc-900/50 border border-zinc-800 p-6 transition-all duration-300 hover:border-zinc-700 hover:bg-zinc-900/80">
              <div className="w-10 h-10 rounded-lg bg-[#C1121F]/15 flex items-center justify-center text-[#C1121F] mb-3">
                <FaUserNinja size={20} />
              </div>
              <h3 className="text-lg font-bold text-white">Actor Profiles</h3>
              <p className="mt-1 text-xs text-zinc-400 leading-relaxed">
                View filmographies, biographies, and notable roles.
              </p>
            </div>

            {/* Highlight 4 */}
            <div className="rounded-2xl bg-zinc-900/50 border border-zinc-800 p-6 transition-all duration-300 hover:border-zinc-700 hover:bg-zinc-900/80">
              <div className="w-10 h-10 rounded-lg bg-[#C1121F]/15 flex items-center justify-center text-[#C1121F] mb-3">
                <FaYoutube size={22} />
              </div>
              <h3 className="text-lg font-bold text-white">Trailer Integration</h3>
              <p className="mt-1 text-xs text-zinc-400 leading-relaxed">
                Watch HD trailers directly in responsive video overlays.
              </p>
            </div>
          </div>
        </section>

        {/* ================================================== */}
        {/* SECTION 5 — WHY CHOOSE CINEVERSE */}
        {/* ================================================== */}
        <section className="py-12 md:py-16 border-t border-zinc-800/60">
          <div className="text-center max-w-3xl mx-auto mb-10">
            <div className="inline-flex items-center justify-center gap-2 text-[#C1121F] font-semibold text-xs sm:text-sm tracking-[0.2em] uppercase">
              <div className="h-px w-6 bg-[#C1121F]" />
              <span>Why Choose CineVerse</span>
              <div className="h-px w-6 bg-[#C1121F]" />
            </div>
            <h2 className="mt-3 text-2xl sm:text-4xl font-bold text-white">
              Built For Seamless Browsing
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {/* Card 1 */}
            <div className="group flex items-start gap-4 rounded-2xl bg-zinc-900/50 border border-zinc-800 p-6 transition-all duration-300 hover:border-[#C1121F]/40 hover:bg-zinc-900">
              <div className="w-11 h-11 rounded-xl bg-[#C1121F]/15 flex items-center justify-center text-[#C1121F] shrink-0">
                <MdFlashOn size={24} />
              </div>
              <div>
                <h3 className="text-lg font-bold text-white">⚡ Fast Discovery</h3>
                <p className="mt-1.5 text-zinc-400 text-sm leading-relaxed">
                  Find movies, TV shows and people instantly.
                </p>
              </div>
            </div>

            {/* Card 2 */}
            <div className="group flex items-start gap-4 rounded-2xl bg-zinc-900/50 border border-zinc-800 p-6 transition-all duration-300 hover:border-[#C1121F]/40 hover:bg-zinc-900">
              <div className="w-11 h-11 rounded-xl bg-[#C1121F]/15 flex items-center justify-center text-[#C1121F] shrink-0">
                <MdPalette size={24} />
              </div>
              <div>
                <h3 className="text-lg font-bold text-white">
                  🎨 Beautiful Experience
                </h3>
                <p className="mt-1.5 text-zinc-400 text-sm leading-relaxed">
                  Carefully crafted cinematic UI.
                </p>
              </div>
            </div>

            {/* Card 3 */}
            <div className="group flex items-start gap-4 rounded-2xl bg-zinc-900/50 border border-zinc-800 p-6 transition-all duration-300 hover:border-[#C1121F]/40 hover:bg-zinc-900">
              <div className="w-11 h-11 rounded-xl bg-[#C1121F]/15 flex items-center justify-center text-[#C1121F] shrink-0">
                <MdRefresh size={24} />
              </div>
              <div>
                <h3 className="text-lg font-bold text-white">
                  🔄 Real-Time Data
                </h3>
                <p className="mt-1.5 text-zinc-400 text-sm leading-relaxed">
                  Always updated through TMDB integration.
                </p>
              </div>
            </div>

            {/* Card 4 */}
            <div className="group flex items-start gap-4 rounded-2xl bg-zinc-900/50 border border-zinc-800 p-6 transition-all duration-300 hover:border-[#C1121F]/40 hover:bg-zinc-900">
              <div className="w-11 h-11 rounded-xl bg-[#C1121F]/15 flex items-center justify-center text-[#C1121F] shrink-0">
                <MdSmartphone size={24} />
              </div>
              <div>
                <h3 className="text-lg font-bold text-white">
                  📱 Fully Responsive
                </h3>
                <p className="mt-1.5 text-zinc-400 text-sm leading-relaxed">
                  Optimized for mobile, tablet and desktop.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ================================================== */}
        {/* SECTION 6 — TECHNOLOGY STACK */}
        {/* ================================================== */}
        <section className="py-12 md:py-16 border-t border-zinc-800/60">
          <div className="text-center max-w-3xl mx-auto mb-10">
            <div className="inline-flex items-center justify-center gap-2 text-[#C1121F] font-semibold text-xs sm:text-sm tracking-[0.2em] uppercase">
              <div className="h-px w-6 bg-[#C1121F]" />
              <span>Technology Stack</span>
              <div className="h-px w-6 bg-[#C1121F]" />
            </div>
            <h2 className="mt-3 text-2xl sm:text-4xl font-bold text-white">
              Built With Modern Technologies
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {/* Tech 1 */}
            <div className="p-5 rounded-2xl bg-zinc-900/60 border border-zinc-800 transition-all duration-300 hover:border-sky-500/40 hover:bg-zinc-900">
              <div className="flex items-center gap-3 text-sky-400">
                <SiReact size={28} />
                <h3 className="text-lg font-bold text-white">React</h3>
              </div>
              <p className="mt-2 text-xs sm:text-sm text-zinc-400 leading-relaxed">
                Component-driven user interface rendering.
              </p>
            </div>

            {/* Tech 2 */}
            <div className="p-5 rounded-2xl bg-zinc-900/60 border border-zinc-800 transition-all duration-300 hover:border-yellow-500/40 hover:bg-zinc-900">
              <div className="flex items-center gap-3 text-yellow-400">
                <SiVite size={28} />
                <h3 className="text-lg font-bold text-white">Vite</h3>
              </div>
              <p className="mt-2 text-xs sm:text-sm text-zinc-400 leading-relaxed">
                Fast frontend tooling & build pipeline.
              </p>
            </div>

            {/* Tech 3 */}
            <div className="p-5 rounded-2xl bg-zinc-900/60 border border-zinc-800 transition-all duration-300 hover:border-rose-500/40 hover:bg-zinc-900">
              <div className="flex items-center gap-3 text-rose-400">
                <SiReactrouter size={28} />
                <h3 className="text-lg font-bold text-white">React Router</h3>
              </div>
              <p className="mt-2 text-xs sm:text-sm text-zinc-400 leading-relaxed">
                Client-side routing & dynamic navigation.
              </p>
            </div>

            {/* Tech 4 */}
            <div className="p-5 rounded-2xl bg-zinc-900/60 border border-zinc-800 transition-all duration-300 hover:border-purple-500/40 hover:bg-zinc-900">
              <div className="flex items-center gap-3 text-purple-400">
                <SiRedux size={28} />
                <h3 className="text-lg font-bold text-white">Redux Toolkit</h3>
              </div>
              <p className="mt-2 text-xs sm:text-sm text-zinc-400 leading-relaxed">
                Centralized state management for global media.
              </p>
            </div>

            {/* Tech 5 */}
            <div className="p-5 rounded-2xl bg-zinc-900/60 border border-zinc-800 transition-all duration-300 hover:border-teal-400/40 hover:bg-zinc-900">
              <div className="flex items-center gap-3 text-teal-400">
                <SiTailwindcss size={28} />
                <h3 className="text-lg font-bold text-white">Tailwind CSS</h3>
              </div>
              <p className="mt-2 text-xs sm:text-sm text-zinc-400 leading-relaxed">
                Utility-first responsive styling framework.
              </p>
            </div>

            {/* Tech 6 */}
            <div className="p-5 rounded-2xl bg-zinc-900/60 border border-zinc-800 transition-all duration-300 hover:border-[#C1121F]/40 hover:bg-zinc-900">
              <div className="flex items-center gap-3 text-[#C1121F]">
                <FaFilm size={26} />
                <h3 className="text-lg font-bold text-white">TMDB API</h3>
              </div>
              <p className="mt-2 text-xs sm:text-sm text-zinc-400 leading-relaxed">
                Real-time movie and TV metadata provider.
              </p>
            </div>
          </div>
        </section>

        {/* ================================================== */}
        {/* SECTION 7 — FINAL CTA */}
        {/* ================================================== */}
        <section className="relative py-14 md:py-20 my-8 overflow-hidden rounded-3xl bg-zinc-900/80 border border-zinc-800 text-center px-6 sm:px-12">
          {/* Subtle Ambient Glow */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[250px] bg-[#C1121F]/15 blur-[120px] rounded-full pointer-events-none" />

          <div className="relative z-10 max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 text-[#C1121F] font-semibold text-xs sm:text-sm tracking-[0.2em] uppercase mb-3">
              <IoSparkles size={16} />
              <span>Start Discovering</span>
            </div>

            <h2 className="text-2xl sm:text-4xl lg:text-5xl font-black text-white leading-tight">
              Your Next Favorite Story Is Waiting.
            </h2>

            <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
              <button
                onClick={() => navigate("/movies")}
                className="group flex items-center justify-center gap-3 w-full sm:w-auto px-7 py-3.5 rounded-xl bg-[#C1121F] hover:bg-[#A50F1A] text-white font-semibold text-base transition-all duration-300 active:scale-95 cursor-pointer"
              >
                <MdMovie size={20} />
                <span>Explore Movies</span>
              </button>

              <button
                onClick={() => navigate("/tv-shows")}
                className="group flex items-center justify-center gap-3 w-full sm:w-auto px-7 py-3.5 rounded-xl bg-zinc-800 hover:bg-zinc-700 text-white font-semibold text-base border border-zinc-700/60 transition-all duration-300 active:scale-95 cursor-pointer"
              >
                <PiTelevisionFill size={20} />
                <span>Browse TV Shows</span>
              </button>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default About;
