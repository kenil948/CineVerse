import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { IoClose } from "react-icons/io5";

const PersonGallery = ({ images }) => {
  const [selectedIndex, setSelectedIndex] = useState(null);

  useEffect(() => {
    document.body.style.overflow = selectedIndex !== null ? "hidden" : "auto";

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [selectedIndex]);

  const nextImage = (e) => {
    e.stopPropagation();

    setSelectedIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  const prevImage = (e) => {
    e.stopPropagation();

    setSelectedIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  if (!images?.length) return null;

  return (
    <section className="px-4 md:px-10 pb-12">
      <div className="flex items-baseline gap-4 mb-3">
        <h2 className="text-2xl md:text-4xl font-bold">Photos</h2>
      </div>

      <p className="text-zinc-500 mb-8">
        {images.length} official photos and portraits
      </p>

      <div className="flex gap-4 sm:gap-5 overflow-x-auto scrollbar-none p-2">
        {images.map((image, index) => (
          <div
            key={index}
            onClick={() => setSelectedIndex(index)}
            className="group relative w-[160px] sm:w-[220px] md:w-[240px] shrink-0 rounded-2xl overflow-hidden bg-zinc-900 border border-zinc-800 cursor-pointer transition-all duration-300 hover:scale-[1.03] hover:border-[#C1121F]/40"
          >
            <img
              src={`https://image.tmdb.org/t/p/w500${image.file_path}`}
              alt=""
              className="w-full h-[220px] sm:h-[300px] md:h-[340px] object-cover transition-transform duration-500 group-hover:scale-105"
            />

            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300" />
          </div>
        ))}
      </div>

      {selectedIndex !== null &&
        createPortal(
          <div
            onClick={() => setSelectedIndex(null)}
            className="fixed inset-0 z-[99999] bg-black/90 backdrop-blur-sm flex items-center justify-center p-4 md:p-6"
          >
            <button
              onClick={(e) => {
                e.stopPropagation();
                setSelectedIndex(null);
              }}
              className="absolute top-4 right-4 md:top-8 md:right-8 text-white text-3xl md:text-4xl cursor-pointer duration-300 hover:text-[#C1121F] z-10"
            >
              <IoClose />
            </button>
            <button
              onClick={prevImage}
              className="absolute left-2 md:left-8 text-white text-5xl md:text-7xl cursor-pointer duration-300 hover:text-[#C1121F] z-10 select-none"
            >
              ‹
            </button>
            <img
              src={`https://image.tmdb.org/t/p/original${images[selectedIndex].file_path}`}
              alt=""
              onClick={(e) => e.stopPropagation()}
              className="max-h-[55vh] sm:max-h-[70vh] max-w-[80vw] sm:max-w-[500px] object-contain rounded-2xl border border-zinc-800 shadow-2xl"
            />
            <button
              onClick={nextImage}
              className="absolute right-2 md:right-8 text-white text-5xl md:text-7xl cursor-pointer duration-300 hover:text-[#C1121F] z-10 select-none"
            >
              ›
            </button>
          </div>,
          document.body,
        )}
    </section>
  );
};

export default PersonGallery;
