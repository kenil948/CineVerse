import { FaPlayCircle, FaShoppingCart } from "react-icons/fa";
import { MdLocalMovies } from "react-icons/md";

const ProviderSection = ({ title, providers }) => {
  if (!providers?.length) return null;

  return (
    <div>
      <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
        {title} ({providers.length})
      </h3>

      <div className="flex gap-3 sm:gap-4 overflow-x-auto p-2 scrollbar-none">
        {providers.map((provider) => (
          <div
            key={provider.provider_id}
            className="w-28 h-28 sm:w-36 sm:h-32 shrink-0 bg-zinc-900 border border-zinc-800 hover:border-red-600 hover:scale-105 transition-all duration-300 rounded-xl p-3 sm:p-4 flex flex-col items-center justify-center"
          >
            <img
              className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg"
              src={`https://image.tmdb.org/t/p/w500${provider.logo_path}`}
              alt={provider.provider_name}
            />

            <p className="text-xs sm:text-sm mt-2 sm:mt-3 text-center text-zinc-200 line-clamp-1">
              {provider.provider_name}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

const WatchProviders = ({ providers }) => {
  const hasProviders =
    providers?.flatrate?.length > 0 ||
    providers?.rent?.length > 0 ||
    providers?.buy?.length > 0;

  if (!hasProviders) return null;

  return (
    <div className="space-y-6">
      <h2 className="text-xl md:text-3xl font-bold mb-2">Watch Options</h2>
      <p className="text-zinc-400 mb-8">
        Where you can stream, rent, or buy this movie.
      </p>
      <ProviderSection
        title={
          <span className="flex items-center gap-2">
            <FaPlayCircle className="text-red-500" />
            Streaming
          </span>
        }
        providers={providers.flatrate}
      />

      <ProviderSection
        title={
          <span className="flex items-center gap-2">
            <MdLocalMovies className="text-yellow-500" />
            Rent
          </span>
        }
        providers={providers.rent}
      />

      <ProviderSection
        title={
          <span className="flex items-center gap-2">
            <FaShoppingCart className="text-green-500" />
            Buy
          </span>
        }
        providers={providers.buy}
      />
    </div>
  );
};

export default WatchProviders;
