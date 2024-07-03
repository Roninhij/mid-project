/* eslint-disable react/prop-types */
import { useEffect, useRef, useState } from "react";
import MovieCard from "./MovieCard";
import { IoChevronBackOutline, IoChevronForwardOutline } from "react-icons/io5";
import { getTrendingVideos } from "../Services/GlobalApi";
import { getMovieByGenreId } from "../Services/GlobalApi";

function MovieList({ genreId }) {
  const [movieList, setMovieList] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const elementRef = useRef(null);

  useEffect(() => {
    if (genreId) {
      fetchMoviesByGenreId();
    } else {
      fetchTrendingMovies();
    }
  }, [genreId]);

  const fetchTrendingMovies = () => {
    setIsLoading(true);
    getTrendingVideos()
      .then((resp) => {
        setMovieList(resp.data.results);
      })
      .catch((error) => {
        console.error("Error fetching trending movies:", error);
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  const fetchMoviesByGenreId = () => {
    setIsLoading(true);
    getMovieByGenreId(genreId)
      .then((resp) => {
        setMovieList(resp.data.results);
      })
      .catch((error) => {
        console.error("Error fetching movies by genre:", error);
      })
      .finally(() => {
        setIsLoading(false);
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

  if (isLoading) return <div>Loading...</div>;

  return (
    <div>
      <div className="relative">
        <IoChevronBackOutline
          onClick={slideLeft}
          className={`text-[50px] text-white hidden md:block p-2 cursor-pointer z-10 absolute top-1/2 transform -translate-y-1/2 bg-transparent`}
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
          className={`text-[50px] text-white hidden md:block p-2 cursor-pointer z-10 absolute top-1/2 transform -translate-y-1/2 right-0 bg-transparent`}
        />
      </div>
    </div>
  );
}

export default MovieList;
