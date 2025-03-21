function DisplayMovie({ allMovie, searchResult, page, setMovie, loading }) {
  const renderMovie = searchResult?.length > 0 ? searchResult : allMovie;

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="animate-spin rounded-full h-12 w-12 border-t-4 border-blue-500"></div>
      </div>
    );
  }
  return (
    <div>
      <ul className="flex flex-wrap justify-center gap-6 p-4">
        {renderMovie?.map((el) => (
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
    </div>
  );
}

export default DisplayMovie;
