/* eslint-disable react/prop-types */
import { useEffect, useRef, useState } from "react";
import GlobalApi from "../Services/GlobalApi";
import MovieCard from "./MovieCard";
import { IoChevronBackOutline, IoChevronForwardOutline } from "react-icons/io5";

function MovieList({ genreId }) {
  const [movieList, setMovieList] = useState([]);
  const elementRef = useRef(null);
  useEffect(() => {
    getMovieByGenreId();
  }, []);
  const getMovieByGenreId = () => {
    GlobalApi.getMovieByGenreId(genreId).then((resp) => {
      setMovieList(resp.data.results);
    });
  };
  const slideRight = (element) => {
    element.scrollLeft += 650;
  };
  const slideLeft = (element) => {
    element.scrollLeft -= 650;
  };

  return (
    <div>
      <div className="relative ">
        <IoChevronBackOutline
          onClick={() => slideLeft(elementRef.current)}
          className={`text-[50px] text-white hidden md:block
p-2 cursor-pointer z-10 absolute top-1/2
transform -translate-y-1/2
             `}
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
          onClick={() => slideRight(elementRef.current)}
          className={`text-[50px] text-white hidden md:block
    p-2 cursor-pointer z-10 absolute top-1/2
    transform -translate-y-1/2 right-0`}
        />
      </div>
    </div>
  );
}
// text-[50px] text-white hidden md:block
// p-2 cursor-pointer z-10 absolute top-1/2
// transform -translate-y-1/2 right-0
export default MovieList;
