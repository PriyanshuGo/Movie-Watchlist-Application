export const coverPageLoader = async () => {
    try {
        const baseUrl = "https://image.tmdb.org/t/p/"
        const res = await fetch(`${baseUrl}movie/now_playing?api_key=${import.meta.env.VITE_APIKEY}`);
        const data = await res.json();
        return data;
      } catch (error) {
        console.log(error);
      }
}

  