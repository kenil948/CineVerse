
import { useNavigate } from "react-router-dom";
import { MdKeyboardArrowLeft, MdArrowForward, MdMovie } from "react-icons/md";
import { PiTelevisionFill } from "react-icons/pi";
import { FaStar, FaUserFriends } from "react-icons/fa";
import { BiCameraMovie } from "react-icons/bi";
import { IoSparkles } from "react-icons/io5";

const About = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-[#222222]">
      <section className="relative overflow-hidden px-4 md:px-10 pt-7 pb-25">
        <div className="absolute left-1/2 top-30 -translate-x-1/2 h-[850px] w-[850px] rounded-full bg-[#C1121F]/8 blur-[170px] pointer-events-none" />

        <div className="absolute bottom-0 right-0 h-[420px] w-[420px] rounded-full bg-[#C1121F]/5 blur-[140px] pointer-events-none" />

        <MdMovie className="hidden lg:block absolute top-36 left-24 text-white/5 text-8xl -rotate-12 pointer-events-none" />

        <PiTelevisionFill className="hidden lg:block absolute top-48 right-28 text-white/5 text-7xl rotate-12 pointer-events-none" />

        <FaStar className="hidden lg:block absolute bottom-24 left-40 text-white/5 text-6xl rotate-12 pointer-events-none" />

        <BiCameraMovie className="hidden lg:block absolute bottom-24 right-40 text-white/5 text-7xl -rotate-12 pointer-events-none" />

        <button
          onClick={() => navigate("/")}
          className="relative z-20 group inline-flex items-center gap-1 text-zinc-400 transition-colors duration-300 hover:text-white cursor-pointer"
        >
          <span className="transition-transform duration-300 group-hover:-translate-x-1">
            <MdKeyboardArrowLeft size={20} />
          </span>

          <span className="text-base font-medium">Back</span>
        </button>

        <div className="relative z-10 mx-auto mt-6 md:mt-10 flex min-h-[60vh] md:min-h-[72vh] max-w-5xl flex-col items-center justify-center text-center">
          <p className="text-xs sm:text-sm font-semibold uppercase tracking-[0.35em] text-zinc-500">
            Welcome to CineVerse
          </p>

          <h1 className="mt-4 md:mt-5 text-2xl sm:text-4xl md:text-5xl font-bold leading-tight text-white lg:text-6xl">
            Discover Movies.
            <br />
            Explore Stories.
            <br />
            Behind Every Great Story.
          </h1>

          <p className="mt-8 max-w-2xl text-lg leading-9 text-zinc-300">
            Your gateway to movies, TV shows and the people behind every
            unforgettable story. Discover what's trending, explore timeless
            classics and meet the talented creators who bring every story to
            life.
          </p>

          <button
            onClick={() => navigate("/")}
            className="group mt-10 inline-flex items-center gap-2 rounded-xl bg-[#C1121F] px-7 py-3 font-semibold text-white transition-all duration-300 hover:bg-[#a20f1a] hover:scale-105 hover:shadow-xl hover:shadow-[#C1121F]/30 active:scale-95 cursor-pointer"
          >
            Start Exploring
            <MdArrowForward
              size={20}
              className="transition-all duration-300 group-hover:translate-x-1 group-hover:-rotate-12"
            />
          </button>
        </div>

        <div className="absolute bottom-0 left-0 h-40 w-full bg-gradient-to-b from-transparent to-[#222222]" />
      </section>

      <section className="relative px-4 md:px-10 pb-10">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto max-w-3xl text-center">
            <div className="flex items-center justify-center gap-4">
              <div className="h-px w-20 bg-[#C1121F]" />

              <p className="text-sm font-semibold uppercase tracking-[0.4em] text-[#C1121F]">
                Our Story
              </p>
            </div>

            <h2 className="mt-6 text-xl md:text-3xl md:text-5xl font-bold leading-tight text-white">
              Everything Worth Watching.
            </h2>

            <p className="mt-8 text-lg leading-9 text-zinc-300">
              We believe discovering great stories should be just as exciting as
              watching them. CineVerse brings movies, TV shows and the people
              behind them together in one beautifully crafted experience.
            </p>

            <p className="mt-8 text-lg leading-9 text-zinc-300">
              Instead of jumping between multiple websites, CineVerse combines
              everything into one modern cinematic destination that's fast,
              elegant and enjoyable to explore.
            </p>
          </div>

          <div className="my-16 flex justify-center">
            <div className="h-px w-40 bg-gradient-to-r from-transparent via-zinc-700 to-transparent" />
          </div>

          <div className="grid gap-4 md:gap-8 md:grid-cols-3">
            <div className="group rounded-3xl border border-zinc-800/60 bg-zinc-900/60 p-8 transition-all duration-300 hover:-translate-y-1 hover:border-[#C1121F]/40 hover:bg-zinc-900 hover:shadow-xl hover:shadow-black/30">
              <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-[#C1121F]/10 transition-all duration-300 group-hover:scale-110 group-hover:rotate-6">
                <MdMovie size={34} className="text-[#C1121F]" />
              </div>

              <h3 className="mt-8 text-2xl font-semibold text-white">Movies</h3>

              <p className="mt-5 leading-8 text-zinc-300">
                Discover trending releases, timeless classics and upcoming
                movies from around the world with detailed information, ratings
                and beautiful artwork.
              </p>
            </div>
            <div className="group rounded-3xl border border-zinc-800/60 bg-zinc-900/60 p-8 transition-all duration-300 hover:-translate-y-1 hover:border-[#C1121F]/40 hover:bg-zinc-900 hover:shadow-xl hover:shadow-black/30">
              <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-[#C1121F]/10 transition-all duration-300 group-hover:scale-110 group-hover:rotate-6">
                <PiTelevisionFill size={34} className="text-[#C1121F]" />
              </div>

              <h3 className="mt-8 text-2xl font-semibold text-white">
                TV Shows
              </h3>

              <p className="mt-5 leading-8 text-zinc-300">
                Follow popular series, discover hidden gems and stay updated
                with ongoing shows from every genre in one place.
              </p>
            </div>

            <div className="group rounded-3xl border border-zinc-800/60 bg-zinc-900/60 p-8 transition-all duration-300 hover:-translate-y-1 hover:border-[#C1121F]/40 hover:bg-zinc-900 hover:shadow-xl hover:shadow-black/30">
              <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-[#C1121F]/10 transition-all duration-300 group-hover:scale-110 group-hover:rotate-6">
                <FaUserFriends size={34} className="text-[#C1121F]" />
              </div>

              <h3 className="mt-8 text-2xl font-semibold text-white">People</h3>

              <p className="mt-5 leading-8 text-zinc-300">
                Meet the actors, directors and creators behind unforgettable
                stories, and explore their incredible work across film and
                television.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden py-15">
        <div className="absolute inset-0 flex justify-center pointer-events-none">
          <div className="h-[520px] w-[520px] rounded-full bg-[#C1121F]/5 blur-[180px]" />
        </div>

        <div className="absolute bottom-0 left-0 h-20 w-full bg-gradient-to-b from-transparent to-[#222222]" />

        <div className="relative z-10 mx-auto max-w-5xl text-center">
          <div className="flex items-center justify-center gap-4">
            <div className="h-px w-20 bg-[#C1121F]" />

            <p className="text-sm font-semibold uppercase tracking-[0.45em] text-[#C1121F]">
              A Cinematic Experience
            </p>
          </div>

          <h2 className="mt-7 text-xl md:text-3xl md:text-5xl font-bold leading-[1.15] text-white">
            Movies aren't just
            <br />
            entertainment.
          </h2>

          <div className="mt-5 space-y-4">
            <h3 className="text-2xl md:text-4xl font-bold text-white">They're memories.</h3>

            <h3 className="text-2xl md:text-4xl font-bold text-white">They're emotions.</h3>

            <h3 className="text-2xl md:text-4xl font-bold text-white">
              They're moments we'll never forget.
            </h3>
          </div>

          <p className="mx-auto mt-10 max-w-3xl text-xl leading-9 text-zinc-400">
            Every unforgettable story begins with curiosity. Every unforgettable
            journey starts with discovering something new.
          </p>
        </div>
      </section>

      <section className="relative px-4 md:px-10 pt-9 pb-15">
        <div className="mx-auto max-w-5xl">
          <div className="text-center">
            <div className="flex items-center justify-center gap-4">
              <div className="h-px w-20 bg-[#C1121F]" />

              <p className="text-sm font-semibold uppercase tracking-[0.45em] text-[#C1121F]">
                Why Choose CineVerse
              </p>
            </div>

            <h2 className="mt-6 text-xl md:text-3xl md:text-5xl font-bold leading-[1.15] text-white">
              Everything You Need.
              <br />
              Nothing You Don't.
            </h2>

            <p className="mx-auto mt-10 max-w-3xl text-lg leading-9 text-zinc-300">
              CineVerse brings movies, television and the talented people behind
              them into one elegant experience — making discovery simple,
              enjoyable and beautifully organized.
            </p>
          </div>

          <div className="mx-auto mt-20 grid max-w-6xl gap-6 md:grid-cols-2">
            <div className="group flex items-start gap-5 rounded-2xl border border-zinc-800 bg-zinc-900/60 p-7 transition-all duration-300 hover:-translate-y-1 hover:border-[#C1121F]/40 hover:bg-zinc-900 hover:shadow-xl hover:shadow-black/30">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#C1121F]/15">
                <IoSparkles size={20} className="text-[#C1121F]" />
              </div>

              <div>
                <h3 className="text-xl font-semibold text-white">
                  Discover Great Movies
                </h3>

                <p className="mt-2 leading-7 text-zinc-400">
                  Browse trending releases, timeless classics and upcoming
                  movies from around the world.
                </p>
              </div>
            </div>

            <div className="group flex items-start gap-5 rounded-2xl border border-zinc-800 bg-zinc-900/60 p-7 transition-all duration-300 hover:-translate-y-1 hover:border-[#C1121F]/40 hover:bg-zinc-900 hover:shadow-xl hover:shadow-black/30">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#C1121F]/15">
                <IoSparkles size={20} className="text-[#C1121F]" />
              </div>

              <div>
                <h3 className="text-xl font-semibold text-white">
                  Explore TV Shows
                </h3>

                <p className="mt-2 leading-7 text-zinc-400">
                  Discover popular series, hidden gems and the highest-rated
                  television shows in one place.
                </p>
              </div>
            </div>

            <div className="group flex items-start gap-5 rounded-2xl border border-zinc-800 bg-zinc-900/60 p-7 transition-all duration-300 hover:-translate-y-1 hover:border-[#C1121F]/40 hover:bg-zinc-900 hover:shadow-xl hover:shadow-black/30">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#C1121F]/15">
                <IoSparkles size={20} className="text-[#C1121F]" />
              </div>

              <div>
                <h3 className="text-xl font-semibold text-white">
                  Meet Incredible Creators
                </h3>

                <p className="mt-2 leading-7 text-zinc-400">
                  Learn more about actors, directors and creators behind
                  unforgettable stories.
                </p>
              </div>
            </div>

            <div className="group flex items-start gap-5 rounded-2xl border border-zinc-800 bg-zinc-900/60 p-7 transition-all duration-300 hover:-translate-y-1 hover:border-[#C1121F]/40 hover:bg-zinc-900 hover:shadow-xl hover:shadow-black/30">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#C1121F]/15">
                <IoSparkles size={20} className="text-[#C1121F]" />
              </div>

              <div>
                <h3 className="text-xl font-semibold text-white">
                  Beautiful Experience
                </h3>

                <p className="mt-2 leading-7 text-zinc-400">
                  Fast, responsive and thoughtfully designed to make every
                  search feel effortless.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="relative px-4 md:px-10 pt-15 pb-28">
        <div className="mx-auto max-w-4xl text-center">
          <div className="flex items-center justify-center gap-4">
            <div className="h-px w-20 bg-[#C1121F]" />

            <p className="text-sm font-semibold uppercase tracking-[0.45em] text-[#C1121F]">
              The Final Frame
            </p>

            <div className="h-px w-20 bg-[#C1121F]" />
          </div>

          <h2 className="mt-6 text-xl md:text-3xl md:text-5xl font-bold leading-tight text-white">
            Every movie begins
            <br />
            with curiosity.
          </h2>

          <h3 className="mt-7 text-xl md:text-3xl font-semibold leading-relaxed text-zinc-300">
            Every unforgettable story
            <br />
            begins with discovery.
          </h3>
          <p className="mx-auto mt-10 max-w-2xl text-lg leading-9 text-zinc-400">
            Thank you for visiting CineVerse. We hope your next favorite movie,
            TV show or creator is just one discovery away.
          </p>
          <div className="mt-15 flex items-center justify-center gap-5">
            <div className="h-px w-16 bg-zinc-700" />

            <span className="text-xs uppercase tracking-[0.5em] text-zinc-400">
              CINEVERSE
            </span>

            <div className="h-px w-16 bg-zinc-700" />
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
