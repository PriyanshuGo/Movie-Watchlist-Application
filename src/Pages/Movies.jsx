import CoverPage from "../components/Movies/CoverPage";
import axios from "axios";
import { useState, useEffect, useContext } from "react";
import SearchBar from "../components/Movies/searchbar";
import { MovieContext } from "../contextCreate/Movie";

function Movies() {
  const { movie, setMovie } = useContext(MovieContext);
  const { allMovie, page, category } = movie;
  
  
  const movieLoader = async () => {
    try {
      const baseUrl = "https://api.themoviedb.org/3/";
      const res = await axios.get(
        `${baseUrl}movie/${category}?api_key=${
          import.meta.env.VITE_APIKEY
        }&page=${page}`
      );
      setMovie(prev => ({ ...prev, allMovie: res.data.results }));  // Update state correctly
       
    } catch (error) {
      console.log(error);
    }
  };

  const handleCategory = (e) => {
    const newCategory = e.target.name;
    setMovie((prev) => ({...prev,category:newCategory,page:1}));
  };

  useEffect(() => {
    movieLoader();
  }, [movie]);

  return (
    <div className="text-white">
      <div className="flex flex-col items-center gap-4 my-6">
        {/* Search Bar */}
        <SearchBar />

        {/* Buttons */}
        <div
          className={`flex sm:gap-4 justify-center mx-5 space-x-1 text-sm sm:text-lg `}
        >
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

      <div>
        <CoverPage allMovie={allMovie} />
        <div className="mt-6 text-2xl text-center text-gray-200 font-semibold uppercase tracking-wider">
          {category}
        </div>

        {allMovie ? (
          <div>
            <ul className="flex flex-wrap justify-center gap-6 p-4">
              {allMovie.map((el) => (
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
            <div className="flex justify-center space-x-6">
              <button
                onClick={() => setMovie((prev) => ({...prev,page:Math.max(prev.page - 1, 1)}))}
                className="cursor-pointer border border-white p-2 my-10"
              >
                Previous
              </button>
              <button
                onClick={() => {
                  setMovie((prev) => ({...prev,page:prev.page + 1}));
                  window.scrollTo({ top: 0, behavior: "smooth" });
                }}
                className="cursor-pointer border border-white p-2 my-10"
              >
                Next
              </button>
            </div>
          </div>
        ) : (
          <div className="flex items-center justify-center min-h-screen">
            <div className="animate-spin rounded-full h-12 w-12 border-t-4 border-blue-500"></div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Movies;
