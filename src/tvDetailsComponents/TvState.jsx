

const TvStats = ({ tv }) => {
  const language = new Intl.DisplayNames(["en"], {
    type: "language",
  }).of(tv.original_language);

  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 sm:gap-4 mt-6 md:mt-10">
      <div className="bg-black/30 backdrop-blur-md rounded-xl p-4 border border-white/10">
        <p className="text-zinc-500 text-sm">Language</p>
        <p className="text-white font-semibold text-lg">
          {language || "N/A"}
        </p>
      </div>

      <div className="bg-black/30 backdrop-blur-md rounded-xl p-4 border border-white/10">
        <p className="text-zinc-500 text-sm">Country</p>
        <p className="text-white font-semibold text-lg">
          {tv.production_countries?.[0]?.name || "N/A"}
        </p>
      </div>

      <div className="bg-black/30 backdrop-blur-md rounded-xl p-4 border border-white/10">
        <p className="text-zinc-500 text-sm">Votes</p>
        <p className="text-white font-semibold text-lg">
          {tv.vote_count?.toLocaleString()}
        </p>
      </div>
    </div>
  );
};

export default TvStats;