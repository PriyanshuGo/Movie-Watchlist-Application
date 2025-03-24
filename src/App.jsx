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
import { JokeLoader } from "./components/Todo/JokeLoader";
import { MovieProvider } from "./contextCreate/Movie";
import MovieDetail from "./components/Movies/MovieDetail";

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<AppLayout />}>
        <Route path="/" element={<Home />} loader={JokeLoader}/>
        <Route path="/movies" element={<MovieProvider><Movies /></MovieProvider>} />
        <Route path="/movie/:id" element={<MovieProvider><MovieDetail /></MovieProvider>} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Route>
    )
  );

  return <RouterProvider router={router} />;
}

export default App;
