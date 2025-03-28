import { useNavigate, useParams } from "react-router-dom";
import { MovieContext } from "../../contextCreate/Movie";
import { useContext, useState, useEffect } from "react";
import axios from "axios";

function DetailMovie() {
  const Navigate = useNavigate();
  const { id } = useParams();
  const { movie, search, watchLater, setWatchLater } = useContext(MovieContext);
  const { allMovie } = movie;
  const { searchResult } = search;
  const [foundMovie, setFoundMovie] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let movieData =
      allMovie.find((el) => el.id == id) ||
      searchResult.find((el) => el.id == id);

    if (movieData) {
      setFoundMovie(movieData);
      setLoading(false);
    } else {
      fetchMovie();
    }
  }, []);

  const fetchMovie = async () => {
    try {
      const res = await axios.get(
        `https://api.themoviedb.org/3/movie/${id}?api_key=${
          import.meta.env.VITE_APIKEY
        }`
      );
      setFoundMovie(res.data);
    } catch (error) {
      console.error("Error fetching movie:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleWatchLater = () => {
    const isAlreadyAdded = watchLater.some((el) => el.id === foundMovie.id);
    if (!isAlreadyAdded) {
      const updatedWatchLater = [...watchLater, foundMovie];
      setWatchLater(updatedWatchLater);

      // Save to localStorage
      localStorage.setItem("Whislist", JSON.stringify(updatedWatchLater));
      alert("Movie added to watchlist:");
    } else {
      alert("Movie already in watchlist");
    }
  };

  if (loading) {
    return (
      <div className="flex flex-col justify-center items-center h-screen text-white">
        <h2 className="text-3xl font-semibold mb-4">Loading...</h2>
      </div>
    );
  }

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

  return (
    <div className="mx-10">
      {/* Movie Details Layout */}
      <div className="flex flex-col md:flex-row items-start gap-8">
        {/* Large Backdrop on the Left */}
        <div className="w-full h-full md:w-2/3">
          <img
            src={`https://image.tmdb.org/t/p/original${foundMovie.backdrop_path}`}
            alt={foundMovie.title}
            className="w-full h-96 object-cover rounded-lg shadow-lg"
          />
        </div>

        {/* Right Side: Poster + Info */}
        <div className="w-full md:w-1/3 flex flex-col items-center md:items-start">
          {/* Small Poster */}
          <img
            src={`https://image.tmdb.org/t/p/w200/${foundMovie.poster_path}`}
            alt={foundMovie.title}
            className="w-40 h-auto object-cover rounded-lg shadow-lg"
          />

          {/* Movie Info Below Poster */}
          <div className="mt-4 text-center md:text-left">
            <h1 className="text-3xl font-bold">{foundMovie.title}</h1>
            <p className="text-lg text-gray-400 italic">
              {foundMovie.tagline || "No Tagline Available"}
            </p>
            <p className="text-md text-gray-300 mt-2">
              Release Date: {foundMovie.release_date}
            </p>
            <p className="mt-4 text-gray-200">{foundMovie.overview}</p>

            {/* Go Back Button */}
            <button
              onClick={() => Navigate(-1)}
              className="mt-6 px-6 py-2 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg shadow-md transition duration-300"
            >
              Go Back
            </button>
            <button
              onClick={handleWatchLater}
              className="mt-6 px-6 py-2 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg shadow-md transition duration-300"
            >
              ADD WishList
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DetailMovie;
