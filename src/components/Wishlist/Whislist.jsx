import { useContext } from "react";
import { MovieContext } from "../../contextCreate/Movie";
import { Link } from "react-router-dom";

function Whislist() {
  const { watchLater, setWatchLater } = useContext(MovieContext);

  const handleRemove = (id) => {
    const updatedList = watchLater.filter((el) => el.id !== id);
    setWatchLater(updatedList);
    localStorage.setItem("Whislist", JSON.stringify(updatedList));
  };

  return (
    <div className="mx-10 bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 shadow-lg border border-gray-700 ">
      <h2 className="text-2xl font-bold text-white mb-4">Your Wishlist</h2>

      {watchLater.length === 0 ? (
        <p className="text-gray-400">No movies added to wishlist.</p>
      ) : (
        <div className="flex flex-wrap justify-center gap-6">
            {watchLater.map((movie) => (
              <div
                key={movie.id}
                className="bg-gray-800 p-4 rounded-lg shadow-lg w-48 sm:w-56 md:w-64 flex flex-col items-center"
              >
          <Link to={`/movie/${movie.id}`}>
                {/* Movie Poster */}
                <img
                  src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`}
                  alt={movie.title}
                  className="w-full h-60 object-cover rounded-lg"
                  />
                  </Link>

                {/* Movie Title */}
                <h3 className="text-lg font-semibold text-white mt-2 text-center">
                  {movie.title}
                </h3>

                {/* Remove Button */}
                <button
                  onClick={() => handleRemove(movie.id)}
                  className="mt-2 bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-md text-sm transition duration-300"
                >
                  Remove
                </button>
              </div>
            ))}
        </div>
      )}
    </div>
  );
}

export default Whislist;
