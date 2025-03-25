import { useContext } from "react";
import { MovieContext } from "../../contextCreate/Movie";

function Whislist() {
  const { watchLater, setWatchLater } = useContext(MovieContext);

  const handleRemove = (id) => {
    const updatedList = watchLater.filter((el) => el.id !== id);
    setWatchLater(updatedList);
    localStorage.setItem("Whislist", JSON.stringify(updatedList));
  };

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold text-white mb-4">Your Wishlist</h2>

      {watchLater.length === 0 ? (
        <p className="text-gray-400">No movies added to wishlist.</p>
      ) : (
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {watchLater.map((movie) => (
            <div key={movie.id} className="bg-gray-800 p-4 rounded-lg shadow-lg">
              <img
                src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`}
                alt={movie.title}
                className="w-full h-60 object-cover rounded-lg"
              />
              <h3 className="text-lg font-semibold text-white mt-2">
                {movie.title}
              </h3>

              <button
                onClick={() => handleRemove(movie.id)}
                className="mt-2 inline-block bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-md text-sm"
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
