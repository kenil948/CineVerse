import { useState } from "react";

const PersonBiography = ({ biography }) => {
  const [expanded, setExpanded] = useState(false);

  return (
    <section className="px-4 md:px-10">
      <div className="flex items-baseline gap-4 mb-8">
        <h2 className="text-2xl md:text-4xl font-bold text-white">Biography</h2>
      </div>

      <div className="bg-zinc-900/70 backdrop-blur-md border border-zinc-800 rounded-2xl md:rounded-3xl p-5 sm:p-7 md:p-10">
        {biography ? (
          <>
            <p className="text-zinc-300 text-[17px] leading-8">
              {expanded || biography.length <= 600
                ? biography
                : `${biography.slice(0, 600)}...`}
            </p>

            {biography.length > 600 && (
              <button
                onClick={() => setExpanded(!expanded)}
                className="mt-6 text-[#C1121F] font-semibold hover:text-red-400 transition-colors duration-300 cursor-pointer"
              >
                {expanded ? "Show Less" : "Read More"}
              </button>
            )}
          </>
        ) : (
          <div>
            <h3 className="text-xl font-bold text-zinc-300 mb-2">
              Biography Not Available
            </h3>
            <p className="text-zinc-400 text-base leading-7">
              The story behind this person is currently unavailable.
            </p>
          </div>
        )}
      </div>
    </section>
  );
};

export default PersonBiography;
