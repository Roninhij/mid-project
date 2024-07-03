import { createContext, useContext, useState } from "react";
import { getMovieDetailsById } from "../Services/GlobalApi"; // Import API function

const MovieContext = createContext();

export const useMovieContext = () => useContext(MovieContext);

export const MovieProvider = ({ children }) => {
  const [movieDetails, setMovieDetails] = useState(null);

  const updateMovieDetails = async (id) => {
    try {
      const response = await getMovieDetailsById(id); // Fetch details using API function
      setMovieDetails(response.data); // Update movieDetails state
    } catch (error) {
      console.error("Error updating movie details:", error);
    }
  };

  return (
    <MovieContext.Provider value={{ movieDetails, updateMovieDetails }}>
      {children}
    </MovieContext.Provider>
  );
};

export default MovieContext;
