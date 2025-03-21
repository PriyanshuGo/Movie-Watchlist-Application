function Category({ handleCategory, category }) {
  return (
    <div
      className={`flex sm:gap-4 justify-center mx-5 space-x-1 text-sm sm:text-lg `}
    >
      <button
        className={`px-4 py-2 text-white bg-blue-600 border border-blue-600 rounded-xl cursor-pointer transition-all hover:bg-transparent hover:text-blue-600 ${
          category == "now_playing" ? "hidden" : "block"
        }`}
        name="now_playing"
        onClick={handleCategory}
      >
        NowPlaying MOVIES
      </button>
      <button
        className={`px-4 py-2 text-white bg-blue-600 border border-blue-600 rounded-xl cursor-pointer transition-all hover:bg-transparent hover:text-blue-600 ${
          category == "popular" ? "hidden" : "block"
        }`}
        name="popular"
        onClick={handleCategory}
      >
        POPULAR MOVIES
      </button>
      <button
        className={`px-4 py-2 text-white bg-green-600 border border-green-600 rounded-xl cursor-pointer transition-all hover:bg-transparent hover:text-green-600 ${
          category == "top_rated" ? "hidden" : "block"
        }`}
        name="top_rated"
        onClick={handleCategory}
      >
        TOP RATED MOVIES
      </button>
      <button
        className={`px-4 py-2 text-white bg-purple-600 border border-purple-600 rounded-xl cursor-pointer transition-all hover:bg-transparent hover:text-purple-600 ${
          category == "upcoming" ? "hidden" : "block"
        }`}
        name="upcoming"
        onClick={handleCategory}
      >
        UPCOMING MOVIES
      </button>
    </div>
  );
}

export default Category;
