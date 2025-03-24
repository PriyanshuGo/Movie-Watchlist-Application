import { useNavigate, useParams } from "react-router-dom";
import { MovieContext } from "../../contextCreate/Movie";
import { useContext } from "react";

function DetailMovie() {
  const Navigate = useNavigate();
  const { id } = useParams();
  const { movie, search } = useContext(MovieContext);
  const { allMovie } = movie;
  const { searchResult } = search;

  const foundMovie =
    allMovie.find((el) => el.id == id) ||
    searchResult.find((el) => el.id == id);
    console.log(foundMovie)


  if (!foundMovie) {
    return (
      <div className="flex flex-col justify-center items-center h-screen text-white">
        <h2 className="text-3xl font-semibold mb-4">Movie Not Found</h2>
        <button
          onClick={() => Navigate(-1)}
          className="px-6 py-2 bg-red-600 hover:bg-red-700 text-white font-medium rounded-lg shadow-md transition duration-300"
        >
          Go Back
        </button>
      </div>
    );
  }

  return  (
    <div
      className="relative min-h-screen text-white"
      style={{
        backgroundImage: `url(https://image.tmdb.org/t/p/original${foundMovie.backdrop_path})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Overlay for better text visibility */}
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>

      <div className="relative z-10 flex flex-col lg:flex-row items-center gap-10 px-10 py-16 max-w-5xl mx-auto">
        {/* Movie Poster */}
        <img
          src={`https://image.tmdb.org/t/p/w500${foundMovie.poster_path}`}
          alt={foundMovie.title}
          className="w-64 h-auto rounded-lg shadow-lg"
        />

        {/* Movie Details */}
        <div className="max-w-2xl">
          <h1 className="text-4xl font-bold">{foundMovie.title}</h1>
          <p className="text-lg text-gray-300 italic">{foundMovie.tagline}</p>

          <div className="mt-4">
            <p className="text-lg">
              <span className="font-semibold">Release Date:</span>{" "}
              {foundMovie.release_date}
            </p>
            <p className="text-lg">
              <span className="font-semibold">Original Language:</span>{" "}
              {foundMovie.original_language.toUpperCase()}
            </p>
            <p className="text-lg">
              <span className="font-semibold">Popularity:</span>{" "}
              {Math.round(foundMovie.popularity)}
            </p>
            <p className="text-lg">
              <span className="font-semibold">Vote Average:</span>{" "}
              ⭐ {foundMovie.vote_average}/10 ({foundMovie.vote_count} votes)
            </p>
          </div>

          {/* Overview */}
          <p className="mt-6 text-gray-300 leading-relaxed">
            {foundMovie.overview}
          </p>

          {/* Back Button */}
          <button
            onClick={() => Navigate(-1)}
            className="mt-6 px-6 py-2 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg shadow-md transition duration-300"
          >
            Go Back
          </button>
        </div>
      </div>
    </div>
  );
}

export default DetailMovie;
