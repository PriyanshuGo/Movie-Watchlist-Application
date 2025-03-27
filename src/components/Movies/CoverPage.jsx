import { useLoaderData } from "react-router-dom";
import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

function CoverPage() {
  const movies = useLoaderData();
  const [index, setIndex] = useState(0);

  const handleNext = () => {
    setIndex((prev) => (prev + 1) % movies.length);
  };

  const handlePrev = () => {
    setIndex((prev) => (prev - 1 + movies.length) % movies.length);
  };

  if (movies.length === 0) return null;

  return (
    <div className="relative mx-5 sm:mx-20 my-8 rounded-2xl overflow-hidden shadow-xl">
      {/* Movie Slide */}
      <div className="relative w-full h-[60vh] xl:h-[75vh] overflow-hidden">
        {movies.map((movie, i) => (
          <div
            key={movie.id}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              i === index ? "opacity-100 scale-100" : "opacity-0 scale-95"
            }`}
          >
            {/* Background Image */}
            <div
              className="absolute inset-0 bg-black/60"
              style={{
                backgroundImage: `url(https://image.tmdb.org/t/p/original${movie.backdrop_path})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            />

            {/* Subtle Overlay & Content at Bottom */}
            <div
              className=" absolute bottom-0 left-0 flex flex-col text-white max-w-xl transition-all duration-500
  md:items-center md:left-1/2 md:-translate-x-1/2 lg:items-end lg:right-10 lg:left-auto lg:bottom-10"
            >
              <h1 className="text-2xl sm:text-4xl font-bold">{movie.title}</h1>
              <p className="text-gray-200 text-sm sm:text-base line-clamp-3 mt-2">
                {movie.overview}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={handlePrev}
        className="absolute top-1/2 left-4 -translate-y-1/2 bg-black/40 p-4 rounded-full shadow-lg hover:bg-black hover:text-white transition duration-300 z-50"
      >
        <ChevronLeft size={40} className="text-white drop-shadow-md" />
      </button>

      <button
        onClick={handleNext}
        className="absolute top-1/2 right-4 -translate-y-1/2 bg-black/40 p-4 rounded-full shadow-lg hover:bg-black hover:text-white transition duration-300 z-50"
      >
        <ChevronRight size={40} className="text-white drop-shadow-md" />
      </button>
    </div>
  );
}

export default CoverPage;
