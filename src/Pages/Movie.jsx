import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useMovieContext } from "../components/MovieContext";
import { getMovieDetailsById } from "../Services/GlobalApi"; // Import API function
const IMAGE_BASE_URL = "http://image.tmdb.org/t/p/original";

const Movie = () => {
  const { movieId } = useParams(); // Extract movieId from URL
  const { movieDetails, updateMovieDetails } = useMovieContext(); // Access context

  useEffect(() => {
    fetchMovieDetails();
  }, [movieId]); // Trigger effect when movieId changes

  const fetchMovieDetails = async () => {
    try {
      const response = await getMovieDetailsById(movieId); // Fetch details using API function
      updateMovieDetails(response.data); // Update context with movie details
    } catch (error) {
      console.error("Error fetching movie details:", error);
    }
  };

  if (!movieDetails) return <div>Loading...</div>;

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

export default Movie;
