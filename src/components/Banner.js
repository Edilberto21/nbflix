import React, { useEffect } from "react";
import categories, { getMovies } from "../api";
import "./Banner.css";
export default function Banner() {
  const [movie, setMovie] = React.useState({});
  const fetchRandomMovie = async () => {
    try {
      const variedmoviesCategory = categories.find(
        (category) => category.name === "variedmovies"
      );
      const data = await getMovies(variedmoviesCategory.path);
      const movies = data?.results;
      const randomIndex = Math.floor(Math.random() * data.results.length);
      setMovie(movies[randomIndex]);
    } catch (error) {
      console.log("Banner fetchRandomMovie error: ", error);
    }
  };
  useEffect(() => {
    fetchRandomMovie();
  }, []);

  function truncate(str, n) {
    return str?.length > n ? str.subtr(0, n - 1) + "..." : str;
  }

  return (
    <header
      className="banner-container"
      style={{
        backgroundSize: "cover",
        backgroundImage: `url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`,
        roundPosition: "center-center",
      }}
    >
      <div className="banner-content">
        <h1 className="banner-title">
          {movie?.title || movie?.name || movie?.original_name}
        </h1>

        <div className="banner-description">
          <h2>{truncate(movie?.overview)}</h2>
        </div>
        <div className="banner-button-container">
          <div className="banner-button">Assistir</div>
          <div className="banner-button">Curtir</div>
        </div>
      </div>
    </header>
  );
}
