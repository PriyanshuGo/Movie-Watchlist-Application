import { useLoaderData } from "react-router-dom";
import CoverPage from "../components/Movies/CoverPage";
import { useState,useEffect } from "react";

function Movies() {
  const movies = useLoaderData();
  const { results } = movies || {};
  const [loading, setLoading] = useState(true);

  // console.log(results);
  // const [category, setcategory] = "";

  const {
    results: {
      0: { poster_path, title, overview },
    },
  } = movies;
  useEffect(() => {
    if (results) {
      setLoading(false);
    }
  }, [results]);

  if(loading){
    return (
      <div className="flex items-center justify-center min-h-screen">
      
      <div className="animate-spin rounded-full h-12 w-12 border-t-4 border-blue-500"></div>
    </div>
    )
  }

  return (
    <div className="text-white">
      <div
        className="flex space-x-2 mx-2 justify-around
      "
      >
        <button
          className="border border-white"
          onClick={() => setcategory("popular")}
        >
          POPULAR MOIVES
        </button>
        <button
          className="border border-white"
          onClick={() => setcategory("top_rated")}
        >
          TOP RATED MOVIES
        </button>
        <button
          className="border border-white"
          onClick={() => setcategory("upcoming")}
        >
          UPCOMING MOVIES
        </button>
      </div>

      {/* <CoverPage title={title} overview={overview } poster_path={poster_path} /> */}

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

      {/* <button onClick={handlePage}>NEXT</button> */}
    </div>
  );
}

export default Movies;
