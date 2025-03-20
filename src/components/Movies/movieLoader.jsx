export const movieLoader = async () => {
  try {
    const baseUrl = "https://api.themoviedb.org/3/"
    const res = await fetch(`${baseUrl}movie/now_playing?api_key=${import.meta.env.VITE_APIKEY}${false ? "hi" : ""}`);
    const data = await res.json();
    return data;
  } catch (error) {
    console.log(error);
  }
};
