import { FaFilm } from "react-icons/fa";

const ProductionCompanies = ({ companies }) => {
  if (!companies?.length) return null;

  return (
    <section className="mt-5">
      <h2 className="text-2xl md:text-4xl font-bold mb-8">Production Companies</h2>

      <div className="flex overflow-x-auto p-2 gap-4 md:gap-6 scrollbar-none">
        {companies.map((company) => (
          <div
            key={company.id}
            className="w-48 h-36 sm:w-64 sm:h-44 shrink-0 bg-zinc-900/80 backdrop-blur-md border border-zinc-800 rounded-2xl p-3 sm:p-4 flex flex-col items-center justify-center text-center transition-all duration-300 hover:scale-[1.02] hover:border-red-600"
          >
            {company.logo_path ? (
              <img
                src={`https://image.tmdb.org/t/p/w500${company.logo_path}`}
                alt={company.name}
                className="h-12 sm:h-16 max-w-[140px] sm:max-w-[180px] object-contain mb-3 sm:mb-5"
              />
            ) : (
              <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-full bg-zinc-800 flex items-center justify-center mb-3 sm:mb-5">
                <FaFilm className="text-xl sm:text-2xl text-zinc-400" />
              </div>
            )}

            <h3 className="font-semibold text-sm sm:text-lg text-white line-clamp-1">
              {company.name}
            </h3>

            {company.origin_country && (
              <p className="text-xs sm:text-sm text-zinc-500 mt-1">
                {company.origin_country}
              </p>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProductionCompanies;
