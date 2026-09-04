const PersonHero = ({ person }) => {
  const age =
    person.birthday &&
    new Date().getFullYear() -
      new Date(person.birthday).getFullYear();

  return (
    <section className="mt-4 md:mt-7 mx-2 md:mx-10 flex gap-6 md:gap-15">
      <div className="max-w-7xl mx-auto w-full grid lg:grid-cols-[240px_1fr] gap-6 md:gap-10 items-center lg:items-start text-center lg:text-left">
        <img
          src={`https://image.tmdb.org/t/p/w500${person.profile_path}`}
          alt={person.name}
          className="
            mx-auto
            lg:mx-0
            w-[180px]
            sm:w-[220px]
            lg:w-full
            max-w-[240px]
            rounded-2xl
            border
            border-zinc-800
            shadow-[0_20px_60px_-15px_rgba(0,0,0,0.7)]
          "
        />

        <div>
          <p className="uppercase tracking-[0.4em] text-zinc-500 text-xs mb-2 md:mb-3">
            Celebrity Profile
          </p>

          <h1 className="text-3xl sm:text-4xl md:text-6xl font-black tracking-tight">
            {person.name}
          </h1>

          <div className="flex flex-wrap justify-center lg:justify-start gap-3 mt-4 md:mt-5">
            <span className="px-4 py-2 rounded-full bg-[#C1121F] text-sm font-medium">
              {person.known_for_department}
            </span>

            <span className="px-4 py-2 rounded-full bg-zinc-800 text-sm font-medium">
              {person.gender === 1 ? "Female" : "Male"}
            </span>
          </div>

          <div className="grid sm:grid-cols-2 gap-5 mt-10">
            <div className="pt-4 border-t border-zinc-800">
              <p className="text-zinc-500">Born</p>
              <h3 className="font-semibold text-lg">
                {person.birthday || "Unknown"}
              </h3>
            </div>

            <div className="pt-4 border-t border-zinc-800">
              <p className="text-zinc-500">Age</p>
              <h3 className="font-semibold text-lg">
                {age || "Unknown"}
              </h3>
            </div>

            <div className="pt-4 border-t border-zinc-800">
              <p className="text-zinc-500">Place Of Birth</p>
              <h3 className="font-semibold text-lg">
                {person.place_of_birth || "Unknown"}
              </h3>
            </div>

            <div className="pt-4 border-t border-zinc-800">
              <p className="text-zinc-500">Known For</p>
              <h3 className="font-semibold text-lg">
                {person.known_for_department}
              </h3>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PersonHero;