/* eslint-disable react/prop-types */
import { useEffect, useRef, useState } from "react";
import MovieCard from "./MovieCard";
import { IoChevronBackOutline, IoChevronForwardOutline } from "react-icons/io5";
import GlobalApi from "../Services/GlobalApi";

function MovieList({ genreId }) {
  const [movieList, setMovieList] = useState([]);
  const [isLoading, setIsLoading] = useState(false); // Initialize loading state to false
  const elementRef = useRef(null);

  useEffect(() => {
    fetchTrendingMovies();
  }, []); // Fetch trending movies when component mounts

  const fetchTrendingMovies = () => {
    setIsLoading(true); // Set loading state to true
    GlobalApi.getTrendingVideos()
      .then((resp) => {
        setMovieList(resp.data.results);
      })
      .catch((error) => {
        console.error("Error fetching trending movies:", error);
      })
      .finally(() => {
        setIsLoading(false); // Set loading state to false after fetching
      });
  };

  const slideRight = () => {
    if (elementRef.current) {
      elementRef.current.scrollLeft += 650;
    }
  };

  const slideLeft = () => {
    if (elementRef.current) {
      elementRef.current.scrollLeft -= 650;
    }
  };

  // Render loading indicator if isLoading is true
  if (isLoading) return <div>Loading...</div>;

  // Conditionally render MovieList based on movieList length
  return (
    <div>
      <div className="relative">
        <IoChevronBackOutline
          onClick={slideLeft}
          className={`text-[50px] text-white hidden md:block p-2 cursor-pointer z-10 absolute top-1/2 transform -translate-y-1/2`}
        />
        <div
          ref={elementRef}
          className="flex overflow-x-auto gap-8 scrollbar-hide scroll-smooth pt-5 px-3 pb-5"
        >
          {movieList.map((item, index) => (
            <MovieCard key={index} movie={item} />
          ))}
        </div>
        <IoChevronForwardOutline
          onClick={slideRight}
          className={`text-[50px] text-white hidden md:block p-2 cursor-pointer z-10 absolute top-1/2 transform -translate-y-1/2 right-0`}
        />
      </div>
    </div>
  );
}

export default MovieList;
