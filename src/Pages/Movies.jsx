import CoverPage from "../components/Movies/CoverPage";
import axios from "axios";
import { useEffect, useContext } from "react";
import { MovieContext } from "../contextCreate/Movie";
import SearchBar from "../components/Movies/SearchBar";
import Category from "../components/Movies/Category";
import DisplayMovie from "../components/Movies/DisplayMovie";
import Paging from "../components/Movies/Paging";

function Movies() {
  const { movie, setMovie } = useContext(MovieContext);
  const { allMovie, searchResult, page, category, loading } = movie;

  const movieLoader = async () => {
    try {
      setMovie((prev) => ({ ...prev, loading: true }));
      const baseUrl = "https://api.themoviedb.org/3/";
      const res = await axios.get(
        `${baseUrl}movie/${category}?api_key=${
          import.meta.env.VITE_APIKEY
        }&page=${page}`
      );
      setMovie((prev) => ({
        ...prev,
        allMovie: res.data.results,
        loading: false,
      })); // Update state correctly
    } catch (error) {
      console.log(error);
      setMovie((prev) => ({ ...prev, loading: false }));
    }
  };

  const handleCategory = (e) => {
    setMovie((prev) => ({ ...prev, searchResult: [] }));
    const newCategory = e.target.name;
    setMovie((prev) => ({ ...prev, category: newCategory, page: 1 }));
  };

  useEffect(() => {
    movieLoader();
  }, [page, category]);

  return (
    <div className="text-white">
      <div className="flex flex-col items-center gap-4 my-6">
        {/* Search Bar */}
        <SearchBar setMovie={setMovie} page={page} />

        {/* Buttons */}
        <Category
          handleCategory={handleCategory}
          category={category}
          searchResult={searchResult}
        />
      </div>

      {searchResult?.length > 0 ? null : (
        <div className="mt-6 text-2xl text-center text-gray-200 font-semibold uppercase tracking-wider">
          {category} MOVIES
          <CoverPage allMovie={allMovie} searchResult={searchResult} />
        </div>
      )}
      <div>
        <DisplayMovie
          allMovie={allMovie}
          searchResult={searchResult}
          page={page}
          setMovie={setMovie}
          loading={loading}
        />
      </div>
      <div>
        {searchResult?.length > 0 ? null : (
          <Paging page={page} setMovie={setMovie} />
        )}
      </div>
    </div>
  );
}

export default Movies;
