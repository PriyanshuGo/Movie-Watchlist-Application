import axios from "axios";
import { Rss } from "lucide-react";

const API = `https://api.themoviedb.org/3/movie/now_playing?api_key=${
  import.meta.env.VITE_APIKEY
}`;

export const CoverPageLoader = async () => {
  try {
    const res = await axios.get(API);
    const movies = res.data.results;
    
    // Shuffle movies and pick 6 random ones
    const randomMovies = movies.sort(() => Math.random() - 0.5).slice(0, 6);
    return randomMovies;
  } catch (error) {
    console.error("Error fetching movies:", error);
    return [];
  }
};
