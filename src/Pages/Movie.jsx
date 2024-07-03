import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getMovieDetailsById } from "../Services/GlobalApi";
const IMAGE_BASE_URL = "http://image.tmdb.org/t/p/original";

const MovieDetails = () => {
  const { id } = useParams();
  const [movieDetails, setMovieDetails] = useState(null);

  useEffect(() => {
    fetchMovieDetails();
  }, []);

  const fetchMovieDetails = async () => {
    try {
      const response = await getMovieDetailsById(id);
      setMovieDetails(response.data);
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
      {/* Add more details as needed */}
    </div>
  );
};

export default MovieDetails;
