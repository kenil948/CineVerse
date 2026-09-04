

const formatMoney = (amount) => {
  if (!amount) return "N/A";

  if (amount >= 1000000000) {
    return `$${(amount / 1000000000).toFixed(1)}B`;
  }

  if (amount >= 1000000) {
    return `$${(amount / 1000000).toFixed(0)}M`;
  }

  return `$${amount.toLocaleString()}`;
};

const MovieStats = ({ movie }) => {
  const language = new Intl.DisplayNames(["en"], {
    type: "language",
  }).of(movie.original_language);

  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 sm:gap-4 mt-6 md:mt-10">
      <div className="bg-black/30 backdrop-blur-md rounded-xl p-4 border border-red-500/20">
        <p className="text-zinc-500 text-sm">Budget</p>
        <p className="text-white font-semibold text-lg">
          {formatMoney(movie.budget)}
        </p>
      </div>

      <div className="bg-black/30 backdrop-blur-md rounded-xl p-4 border border-red-500/20">
        <p className="text-zinc-500 text-sm">Revenue</p>
        <p className="text-white font-semibold text-lg">
          {formatMoney(movie.revenue)}
        </p>
      </div>

      <div className="bg-black/30 backdrop-blur-md rounded-xl p-4 border border-white/10">
        <p className="text-zinc-500 text-sm">Language</p>
        <p className="text-white font-semibold text-lg">
          {language || "N/A"}
        </p>
      </div>

      <div className="bg-black/30 backdrop-blur-md rounded-xl p-4 border border-white/10">
        <p className="text-zinc-500 text-sm">Country</p>
        <p className="text-white font-semibold text-lg">
          {movie.production_countries?.[0]?.name || "N/A"}
        </p>
      </div>

      <div className="bg-black/30 backdrop-blur-md rounded-xl p-4 border border-white/10">
        <p className="text-zinc-500 text-sm">Votes</p>
        <p className="text-white font-semibold text-lg">
          {movie.vote_count?.toLocaleString()}
        </p>
      </div>
    </div>
  );
};

export default MovieStats;