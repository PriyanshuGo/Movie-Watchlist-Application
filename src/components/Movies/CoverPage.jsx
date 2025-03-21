function CoverPage({ allMovie }) {
  const [{ title, overview, poster_path } = {}] = allMovie || []; // Destructuring the first object from the results array
  return (
    <div className="relative mx-5 sm:mx-20 my-8 rounded-2xl overflow-hidden shadow-xl">
      {/* Background Image with Blur Effect */}
      <div
        className="absolute inset-0 bg-black/70 z-10 rounded-2xl"
        style={{
          backgroundImage: `url(https://image.tmdb.org/t/p/w780${poster_path})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          filter: "blur(10px)",
        }}
      />

      {/* Main Content */}
      <div className="relative z-20 flex md:flex-row items-center gap-6 p-6 w-full ">
        {/* Movie Poster */}
        <img
          src={`https://image.tmdb.org/t/p/w500${poster_path}`}
          alt={title}
          className="w-40 md:w-72 rounded-xl shadow-lg"
        />

        {/* Movie Details */}
        <div className="bg-white/30 backdrop-blur-lg p-6 rounded-xl shadow-lg text-black space-y-4 max-w-xl">
          <h1 className="text-3xl font-bold">{title}</h1>
          <p className="text-gray-800 text-sm md:text-base line-clamp-6">
            {overview}
          </p>
        </div>
      </div>
    </div>
  );
}

export default CoverPage;
