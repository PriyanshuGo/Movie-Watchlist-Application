import React from "react";
import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route,
} from "react-router-dom";
import Home from "./Pages/Home";
import Movies from "./Pages/Movies";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import AppLayout from "./Pages/AppLayout";
import { movieLoader } from "./components/Movies/movieLoader";
import { JokeLoader } from "./components/Todo/JokeLoader";


function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<AppLayout />}>
        <Route path="/" element={<Home />} loader={JokeLoader}/>
        <Route path="/movies" element={<Movies />} loader={movieLoader} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Route>
    )
  );

  return <RouterProvider router={router} />;
}

export default App;
