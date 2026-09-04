import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { IoClose } from "react-icons/io5";
import { CgSpinner } from "react-icons/cg";

const PersonGallery = ({ images }) => {
  const [selectedIndex, setSelectedIndex] = useState(null);
  const [imageLoading, setImageLoading] = useState(false);

  useEffect(() => {
    document.body.style.overflow = selectedIndex !== null ? "hidden" : "auto";

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [selectedIndex]);

  // Preload adjacent images whenever selectedIndex changes
  useEffect(() => {
    if (selectedIndex === null || !images?.length) return;

    setImageLoading(true);

    const nextIndex = (selectedIndex + 1) % images.length;
    const prevIndex = (selectedIndex - 1 + images.length) % images.length;

    const imgNext = new Image();
    imgNext.src = `https://image.tmdb.org/t/p/original${images[nextIndex].file_path}`;

    const imgPrev = new Image();
    imgPrev.src = `https://image.tmdb.org/t/p/original${images[prevIndex].file_path}`;
  }, [selectedIndex, images]);

  const nextImage = (e) => {
    e.stopPropagation();
    if (imageLoading) return;
    setImageLoading(true);
    setSelectedIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  const prevImage = (e) => {
    e.stopPropagation();
    if (imageLoading) return;
    setImageLoading(true);
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
            {/* Close Button */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                setSelectedIndex(null);
              }}
              className="absolute top-4 right-4 md:top-8 md:right-8 text-white text-3xl md:text-4xl cursor-pointer duration-300 hover:text-[#C1121F] z-20"
            >
              <IoClose />
            </button>

            {/* Previous Button */}
            <button
              onClick={prevImage}
              disabled={imageLoading}
              className={`absolute left-5 md:left-8 text-white text-5xl md:text-7xl z-20 select-none transition-all duration-300 ${
                imageLoading
                  ? "opacity-50 cursor-not-allowed"
                  : "cursor-pointer hover:text-[#C1121F] active:scale-95"
              }`}
            >
              ‹
            </button>

            {/* Image Wrapper Container */}
            <div
              onClick={(e) => e.stopPropagation()}
              className="relative flex items-center justify-center rounded-2xl overflow-hidden"
            >
              {/* Main Image - stays visible with blur & brightness overlay when loading */}
              <img
                src={`https://image.tmdb.org/t/p/original${images[selectedIndex].file_path}`}
                alt=""
                onLoad={() => setImageLoading(false)}
                onError={() => setImageLoading(false)}
                className={`max-h-[48vh] sm:max-h-[62vh] max-w-[75vw] sm:max-w-[440px] object-contain rounded-2xl border border-zinc-800 shadow-2xl transition-all duration-300 ${
                  imageLoading ? "blur-[2px] brightness-75" : "blur-0 brightness-100"
                }`}
              />

              {/* Cinematic Loading Overlay & Red Spinner */}
              {imageLoading && (
                <div className="absolute inset-0 bg-black/40 backdrop-blur-sm flex flex-col items-center justify-center gap-2 rounded-2xl z-10 transition-all duration-300">
                  <CgSpinner className="w-8 h-8 animate-spin text-[#C1121F]" />
                  <span className="text-xs sm:text-sm font-medium text-zinc-300">
                    Loading image...
                  </span>
                </div>
              )}
            </div>

            {/* Next Button */}
            <button
              onClick={nextImage}
              disabled={imageLoading}
              className={`absolute right-5 md:right-8 text-white text-5xl md:text-7xl z-20 select-none transition-all duration-300 ${
                imageLoading
                  ? "opacity-50 cursor-not-allowed"
                  : "cursor-pointer hover:text-[#C1121F] active:scale-95"
              }`}
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
