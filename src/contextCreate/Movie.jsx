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

    const [watchLater, setWatchLater] = useState(() => {
      const savedWatchlist = localStorage.getItem("Whislist");
      return savedWatchlist ? JSON.parse(savedWatchlist) : [];
    });
      
  return <MovieContext.Provider value={{movie,setMovie,search,setSearch,setWatchLater,watchLater}}>{children}</MovieContext.Provider>;
};
