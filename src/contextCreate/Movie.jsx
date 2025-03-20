import { useState, createContext } from "react";

export const MovieContext = createContext();

export const MovieProvider = ({ children }) => {
    const [movie, setMovie] = useState({
      allMovie:[],
      searchResult:[],
      page:1,
      category:"now_playing"
    });
  
  return <MovieContext.Provider value={{movie,setMovie}}>{children}</MovieContext.Provider>;
};
