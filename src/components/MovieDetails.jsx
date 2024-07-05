import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useMovieContext } from "../context/MovieContext"; // Import the context hook
import { getMovieDetailsById } from "../Services/GlobalApi"; // Import API function
const IMAGE_BASE_URL = "http://image.tmdb.org/t/p/original";

const MovieDetails = () => {
  const { movieId } = useParams(); // Extract movieId from URL params
  const { movieDetails, updateMovieDetails } = useMovieContext(); // Access context
  const [isLoading, setIsLoading] = useState(true);
  console.log(movieDetails);
  useEffect(() => {
    fetchMovieDetails(movieId); // Fetch movie details when movieId changes
  }, [movieId]); // Dependency array ensures effect runs when movieId changes

  const fetchMovieDetails = async (id) => {
    setIsLoading(true);
    try {
      const response = await getMovieDetailsById(id); // Fetch details using API function with id
      updateMovieDetails(response.data); // Update context with movie details
    } catch (error) {
      console.error("Error fetching movie details:", error);
    } finally {
      setIsLoading(false);
    }
  };

  if (isLoading || !movieDetails) return <div>Loading...</div>;

  return (
    <div>
      <h1>{movieDetails.title}</h1>
      <img
        src={IMAGE_BASE_URL + movieDetails.poster_path}
        alt={movieDetails.title}
      />
      <p>{movieDetails.overview}</p>
      {/* Display other details as needed */}
    </div>
  );
};

export default MovieDetails;
