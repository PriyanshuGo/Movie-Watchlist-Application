import Head from "../components/Wishlist/Head";
import Joke from "../components/Wishlist/Joke";
import Whislist from "../components/Wishlist/Whislist";

function Home() {
  return (
    <div className="flex flex-col items-center h-full">
      <Head />
      <Joke />
      <Whislist />
    </div>
  );
}

export default Home;
