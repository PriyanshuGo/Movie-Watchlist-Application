import { useEffect } from "react";


function CoverPage({ title, overview, poster_path }) {
  const coverImg = async () => {
    try {
      const baseUrl = "https://image.tmdb.org/t/p/";
      const res = await fetch(`${baseUrl}w500/${poster_path}`);
      return res;
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    coverImg();
  }, []);

  return <div>
    {coverImg}
  </div>;
}

export default CoverPage;
