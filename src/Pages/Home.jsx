import AddTask from "../components/Todo/AddTask";
import DisplayTask from "../components/Todo/DisplayTask";
import Head from "../components/Todo/Head";
import Joke from "../components/Todo/Joke";
import { TaskProvider } from "../contextCreate/Task";

function Home() {
  return (
    <div className="flex flex-col items-center h-full">
      <Head />
      <Joke />
      <div className=" bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 shadow-lg border border-gray-700 w-full max-w-4xl mt-6">
        <TaskProvider>
          <AddTask />
          <DisplayTask />
        </TaskProvider>
      </div>
    </div>
  );
}

export default Home;
