import { createContext, useContext, useEffect, useState } from "react";
import { baseUrl, getMovieDetailsById } from "../Services/GlobalApi"; // Import API function
import axios from "axios";

const MovieContext = createContext();

export const useMovieContext = () => useContext(MovieContext);

export const MovieProvider = ({ children }) => {
  const [movieDetails, setMovieDetails] = useState(null);
  const [mockApiMovies, setMockApiMovies] = useState([]);

  useEffect(() => {
    getMovies();
  }, []);

  const updateMovieDetails = async (data) => {
    try {
      //const response = await getMovieDetailsById(data.id); // Fetch details using API function
      setMovieDetails(data); // Update movieDetails state
    } catch (error) {
      console.error("Error updating movie details:", error);
    }
  };

  const getMovies = async () => {
    try {
      const response = await axios.get(baseUrl);
      setMockApiMovies(response.data); // Optionally return data if needed
    } catch (error) {
      console.error("Failed to add movie:", error);
      throw new Error("Failed to add movie");
    }
  };

  return (
    <MovieContext.Provider
      value={{ movieDetails, updateMovieDetails, mockApiMovies, getMovies }}
    >
      {children}
    </MovieContext.Provider>
  );
};

export default MovieContext;
