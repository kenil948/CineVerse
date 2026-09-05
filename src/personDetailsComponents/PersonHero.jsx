import { useState } from "react";
import { MdPeopleAlt } from "react-icons/md";

const PersonHero = ({ person }) => {
  const [imageError, setImageError] = useState(false);

  const age =
    person?.birthday &&
    !person?.deathday &&
    new Date().getFullYear() - new Date(person.birthday).getFullYear();

  return (
    <section className="mt-4 md:mt-7 mx-2 md:mx-10 flex gap-6 md:gap-15">
      <div className="max-w-7xl mx-auto w-full grid lg:grid-cols-[240px_1fr] gap-6 md:gap-10 items-center lg:items-start text-center lg:text-left">
        <div className="mx-auto lg:mx-0 w-[180px] sm:w-[220px] lg:w-full max-w-[240px] h-[270px] sm:h-[330px] rounded-2xl border border-zinc-800 bg-zinc-900 overflow-hidden shadow-[0_20px_60px_-15px_rgba(0,0,0,0.7)] flex items-center justify-center">
          {person.profile_path && !imageError ? (
            <img
              src={`https://image.tmdb.org/t/p/w500${person.profile_path}`}
              alt={person.name || "Celebrity"}
              onError={() => setImageError(true)}
              className="w-full h-full object-cover"
            />
          ) : (
            <div className="w-full h-full flex flex-col items-center justify-center p-4 text-center bg-zinc-900 border border-zinc-800">
              <MdPeopleAlt size={48} className="text-[#C1121F] mb-2 opacity-80" />
              <span className="text-xs sm:text-sm font-semibold text-zinc-400">
                No Profile Image Available
              </span>
            </div>
          )}
        </div>

        <div>
          <p className="uppercase tracking-[0.4em] text-zinc-500 text-xs mb-2 md:mb-3 font-semibold">
            Celebrity Profile
          </p>

          <h1 className="text-3xl sm:text-4xl md:text-6xl font-black tracking-tight text-white">
            {person.name || "Unknown Person"}
          </h1>

          <div className="flex flex-wrap justify-center lg:justify-start gap-3 mt-4 md:mt-5">
            {person.known_for_department && (
              <span className="px-4 py-2 rounded-full bg-[#C1121F] text-white text-sm font-medium">
                {person.known_for_department}
              </span>
            )}

            <span className="px-4 py-2 rounded-full bg-zinc-800 text-zinc-300 text-sm font-medium border border-zinc-700">
              {person.gender === 1 ? "Female" : person.gender === 2 ? "Male" : "Not Specified"}
            </span>
          </div>

          <div className="grid sm:grid-cols-2 gap-5 mt-8 md:mt-10">
            <div className="pt-4 border-t border-zinc-800">
              <p className="text-zinc-500 text-sm">Born</p>
              <h3 className="font-semibold text-base sm:text-lg text-white mt-1">
                {person.birthday || "Unknown"}
              </h3>
            </div>

            <div className="pt-4 border-t border-zinc-800">
              <p className="text-zinc-500 text-sm">Age</p>
              <h3 className="font-semibold text-base sm:text-lg text-white mt-1">
                {person.deathday
                  ? `Deceased (${person.birthday?.split("-")[0]} - ${person.deathday?.split("-")[0]})`
                  : age
                    ? `${age} years`
                    : "Unknown"}
              </h3>
            </div>

            <div className="pt-4 border-t border-zinc-800">
              <p className="text-zinc-500 text-sm">Place Of Birth</p>
              <h3 className="font-semibold text-base sm:text-lg text-white mt-1">
                {person.place_of_birth || "Unknown"}
              </h3>
            </div>

            <div className="pt-4 border-t border-zinc-800">
              <p className="text-zinc-500 text-sm">Known For</p>
              <h3 className="font-semibold text-base sm:text-lg text-white mt-1">
                {person.known_for_department || "Acting"}
              </h3>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PersonHero;