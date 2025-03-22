import { useContext, useState,useEffect } from "react";
import axios from "axios";
import { MovieContext } from "../../contextCreate/Movie";

function SearchBar() {
  const { search, setSearch } = useContext(MovieContext);
  const { searchResult } = search;
  const [searchTerm, setSearchTerm] = useState({
    previous:"",
    current:"",
    page:1,
  });

  const searchMovie = async (movie) => {
    // console.log(searchTerm.page)
    try {
      const baseUrl = "https://api.themoviedb.org/3/search/";
      const res = await axios.get(
        `${baseUrl}movie?api_key=${
          import.meta.env.VITE_APIKEY
        }&query=${movie}&page=${searchTerm.page}`
      );
      if (res.data.results.length > 0) {
        setSearch((prev) => ({ ...prev, searchResult: res.data.results }));
        setSearchTerm((prev) => ({...prev,current:""}));
      }
      else{
        alert("No more results found");
        setSearchTerm((prev) => ({ ...prev, page: prev.page - 1 }));

      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleSearch = (e) => {
    e.preventDefault();
    // console.log(searchTerm.page)
    const movie = searchTerm.current;
    // console.log(movie)
    setSearchTerm((prev) => ({...prev,previous:movie}))

        if (movie.length > 0) {
          searchMovie(movie);
    }
  }

  useEffect(() => {
    if (searchTerm.previous) {
      searchMovie(searchTerm.previous);
         }
  }, [searchTerm.page])
  

  return (  
    <div>
      <div>
        <form onSubmit={handleSearch}>
          <input
            type="text"
            value={searchTerm.current}
            onChange={(e) => setSearchTerm((prev) => ({...prev,current:e.target.value}))}
            placeholder="Search Movies..."
            className="px-4 py-2 w-72 text-black bg-white border border-gray-300 rounded-xl outline-none focus:border-blue-500 transition-all"
          />
        </form>
      </div>

      {searchResult?.length > 0  ?  <div className="flex justify-center space-x-6">
        <button
          onClick={() =>
            setSearchTerm((prev) => ({
              ...prev,
              page: Math.max(prev.page - 1, 1),
            }))
          }
          className="cursor-pointer border border-white p-2 my-10"
        >
          Previous
        </button>
        <button
          onClick={() => {
            setSearchTerm((prev) => ({ ...prev, page: prev.page + 1 }));
            window.scrollTo({ top: 0, behavior: "smooth" });
          }}
          className="cursor-pointer border border-white p-2 my-10"
        >
          Next
        </button>
      </div>
      :
      null
      }

    </div>
  );
}

export default SearchBar;
