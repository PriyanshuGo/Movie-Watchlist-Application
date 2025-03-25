import { useLoaderData } from "react-router-dom";

function Joke() {
  const joke = useLoaderData();
  if (joke) {
    const {
      data: { setup, punchline },
    } = joke;
    return (
      <div className="text-white text-center bg-gray-800/70 backdrop-blur-md rounded-xl p-6 shadow-lg border border-gray-700 mb-4 mx-2 transition-all duration-500 hover:scale-105">
        <h2 className="text-xl font-semibold mb-2 text-teal-400">{setup}</h2>
        <p className="text-lg text-gray-300 mt-2 italic">{punchline}</p>
      </div>
    );
  }

  return (
    <div className="text-white text-center bg-gray-800/70 backdrop-blur-md rounded-xl p-6 shadow-lg border border-gray-700 mb-4 mx-2 ">
      <div className="animate-spin rounded-full border-t-4 h-5 w-5 border-blue-500"></div>
    </div>
  );
}

export default Joke;
