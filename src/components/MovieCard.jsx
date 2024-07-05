/* eslint-disable react/prop-types */
import { useNavigate } from "react-router-dom";
import { useMovieContext } from "./MovieContext";
import { useEffect, useState } from "react";

const IMAGE_BASE_URL = "http://image.tmdb.org/t/p/original";

const MovieCard = ({ movie }) => {
  const [poster, setPoster] = useState("");
  const { updateMovieDetails } = useMovieContext();

  const navigate = useNavigate();

  useEffect(() => {
    if (movie) {
      const moviePoster = movie?.backdrop_path.includes("http")
        ? movie?.backdrop_path
        : IMAGE_BASE_URL + movie?.backdrop_path;
      setPoster(moviePoster);
    }
  }, [movie]);

  const handleMovieClicked = () => {
    updateMovieDetails(movie);
    navigate(`/movie/${movie.id}`);
  };

  return (
    <img
      src={poster}
      alt={movie.title}
      className="w-[110px] md:w-[200px] object-cover rounded-lg hover:border-[3px] border-gray-400 hover:scale-110 transition-all duration-150 ease-in cursor-pointer z-10"
      onClick={handleMovieClicked}
    />
  );
};

export default MovieCard;
