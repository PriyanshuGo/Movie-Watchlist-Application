import { useState } from "react";

function SearchBar() {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResult, setSearchResult] = useState([]);

  const searchMovie = async (e) => {
    e.preventDefault();
    setSearchResult([]);
    try {
      const baseUrl = "https://api.themoviedb.org/3/search/";
      const res = await axios.get(
        `${baseUrl}movie?api_key=${
          import.meta.env.VITE_APIKEY
        }&query=${searchTerm}&page=${page}`
      );
      setSearchResult(res.data);
      setSearchTerm("");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <form onSubmit={searchMovie}>
        <input
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="Search Movies..."
          className="px-4 py-2 w-72 text-black bg-white border border-gray-300 rounded-xl outline-none focus:border-blue-500 transition-all"
        />
      </form>
    </div>
  );
}

export default SearchBar;
