import CoverPage from "../components/Movies/CoverPage";
import axios from "axios";
import { useState, useEffect } from "react";

function Movies() {
  const [movies, setMovies] = useState([]);
  const [page, setPage] = useState(1);
  const [category, setcategory] = useState("now_playing");
  const { results } = movies;

  const movieLoader = async () => {
    try {
      const baseUrl = "https://api.themoviedb.org/3/";
      const res = await axios.get(
        `${baseUrl}movie/${category}?api_key=${
          import.meta.env.VITE_APIKEY
        }&page=${page}`
      );
      setMovies(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  const handleCategory = (e) => {
    setcategory(e.target.name);
    setPage(1);
  };

  useEffect(() => {
    movieLoader();
  }, [page, category]);

  return (
    <div className="text-white">
<div className="flex flex-col items-center gap-4 my-6">
  {/* Search Bar */}
  <input
    type="text"
 
    placeholder="Search Movies..."
    className="px-4 py-2 w-72 text-black bg-white border border-gray-300 rounded-xl outline-none focus:border-blue-500 transition-all"
  />

  {/* Buttons */}
  <div className="flex sm:gap-4 justify-center mx-5 space-x-1 text-sm sm:text-lg">
    <button
      className="px-4 py-2 text-white bg-blue-600 border border-blue-600 rounded-xl cursor-pointer transition-all hover:bg-transparent hover:text-blue-600"
      name="popular"
      onClick={handleCategory}
    >
      POPULAR MOVIES
    </button>
    <button
      className="px-4 py-2 text-white bg-green-600 border border-green-600 rounded-xl cursor-pointer transition-all hover:bg-transparent hover:text-green-600"
      name="top_rated"
      onClick={handleCategory}
    >
      TOP RATED MOVIES
    </button>
    <button
      className="px-4 py-2 text-white bg-purple-600 border border-purple-600 rounded-xl cursor-pointer transition-all hover:bg-transparent hover:text-purple-600"
      name="upcoming"
      onClick={handleCategory}
    >
      UPCOMING MOVIES
    </button>
  </div>
</div>


      <CoverPage results={results} />
      <div className="mt-6 text-2xl text-center text-gray-200 font-semibold uppercase tracking-wider">
        {category}
      </div>

      {results ? (
        <ul className="flex flex-wrap justify-center gap-6 p-4">
          {results.map((el) => (
            <div
              key={el.id}
              className="bg-gray-800/50 backdrop-blur-sm rounded-xl shadow-lg border border-gray-700 p-3 w-60 transition-transform hover:scale-105"
            >
              <img
                src={`https://image.tmdb.org/t/p/w300${el.poster_path}`}
                alt={el.title}
                className="rounded-lg mb-2"
              />
              <div>
                <h2 className="text-lg text-white font-bold mb-1 truncate">
                  {el.title}
                </h2>
                <p className="text-gray-300 text-sm line-clamp-3">
                  {el.overview}
                </p>
              </div>
            </div>
          ))}
        </ul>
      ) : (
        <div className="flex items-center justify-center min-h-screen">
          <div className="animate-spin rounded-full h-12 w-12 border-t-4 border-blue-500"></div>
        </div>
      )}

      <div className="flex justify-center space-x-6">
        <button
          onClick={() => setPage((prev) => Math.max(prev - 1, 1))}
          className="cursor-pointer border border-white p-2 my-10"
        >
          Previous
        </button>
        <button
          onClick={() => {
            setPage((prev) => prev + 1);
            window.scrollTo({ top: 0, behavior: "smooth" });
          }}
          className="cursor-pointer border border-white p-2 my-10"
        >
          Next
        </button>
      </div>
    </div>
  );
}

export default Movies;
