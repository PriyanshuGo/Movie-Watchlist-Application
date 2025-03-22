import { useState, createContext } from "react";

export const MovieContext = createContext();

export const MovieProvider = ({ children }) => {
    const [movie, setMovie] = useState({
      allMovie:[],
      page:1,
      category:"now_playing",
      loading:false,
    });

    const [search,setSearch] = useState({
      searchResult:[],
    })
  
  return <MovieContext.Provider value={{movie,setMovie,search,setSearch}}>{children}</MovieContext.Provider>;
};
