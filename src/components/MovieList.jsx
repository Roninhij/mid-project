/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/prop-types */
import { useEffect, useRef, useState } from "react";
import MovieCard from "./MovieCard";
import { IoChevronBackOutline, IoChevronForwardOutline } from "react-icons/io5";
import { getTrendingVideos } from "../Services/GlobalApi";
import { getMovieByGenreId } from "../Services/GlobalApi";
import { useMovieContext } from "./MovieContext";

function MovieList({ genreId }) {
  const [movieList, setMovieList] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const elementRef = useRef(null);
  const { mockApiMovies } = useMovieContext();
  const [updatedAllMovies, setUpdatedAllMovies] = useState([]);

  useEffect(() => {
    setUpdatedAllMovies([...mockApiMovies, ...movieList]);
    // console.log(updatedAllMovies);
  }, [mockApiMovies, movieList]);

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

  // console.log(`mmmm`, movieList);
  if (isLoading) return <div>Loading...</div>;

  return (
    <div>
      <div className="relative">
        <IoChevronBackOutline
          onClick={slideLeft}
          className={`text-[50px] text-white hidden md:block p-2 cursor-pointer z-30 absolute top-1/2 transform -translate-y-1/2 bg-transparent left-0 `}
        />
        <div
          ref={elementRef}
          className="flex overflow-x-auto gap-8 scrollbar-hide scroll-smooth pt-5 px-3 pb-5 h-56"
        >
          {updatedAllMovies.map((item) => (
            <MovieCard key={item.id} movie={item} />
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
