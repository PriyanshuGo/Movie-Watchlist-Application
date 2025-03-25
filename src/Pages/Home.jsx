import Head from "../components/Wishlist/Head";
import Joke from "../components/Wishlist/Joke";
import Whislist from "../components/Wishlist/Whislist";

function Home() {
  return (
    <div className="flex flex-col items-center h-full">
      <Head />
      <Joke />
      <div className=" bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 shadow-lg border border-gray-700 w-full max-w-4xl mt-6">
        <Whislist />
      </div>
    </div>
  );
}

export default Home;
