/* eslint-disable react/prop-types */
import { useNavigate } from "react-router-dom";

const IMAGE_BASE_URL = "http://image.tmdb.org/t/p/original";

const MovieCard = ({ movie }) => {
  const navigate = useNavigate();

  const handleMovieClicked = () => {
    navigate(`/movie/${movie.id}`);
  };

  return (
    <img
      src={IMAGE_BASE_URL + movie.poster_path}
      alt={movie.title}
      className="w-[110px] md:w-[200px] rounded-lg hover:border-[3px] border-gray-400 hover:scale-110 transition-all duration-150 ease-in cursor-pointer"
      onClick={handleMovieClicked}
    />
  );
};

export default MovieCard;
