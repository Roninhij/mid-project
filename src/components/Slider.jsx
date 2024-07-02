import { useEffect, useRef, useState } from "react";
import GlobalApi from "../Services/GlobalApi";
import { HiChevronLeft, HiChevronRight } from "react-icons/hi";
const IMAGE_BASE_URL = "http://image.tmdb.org/t/p/original";
const screenWidth = window.innerWidth;
function Slider() {
  const [movieList, setMovieList] = useState([]);
  const elementRef = useRef();
  useEffect(() => {
    getTrendingMovies();
  }, []);

  const getTrendingMovies = () => {
    GlobalApi.getTrendingVideos.then((resp) => {
      console.log(resp.data.results);
      setMovieList(resp.data.results);
    });
  };
  const sliderLeft = (element) => {
    element.scrollLeft -= screenWidth - 110;
  };
  const sliderRight = (element) => {
    element.scrollLeft += screenWidth - 110;
  };
  return (
    <div>
      <HiChevronLeft
        className="hidden md:block text-black text-[30px] absolute mx-8 mt-[150px] cursor-pointer left-0 bg-white rounded-2xl"
        onClick={() => sliderLeft(elementRef.current)}
      />
      <HiChevronRight
        className="hidden md:block text-black text-[30px] absolute mx-8 mt-[150px] cursor-pointer right-1 bg-white rounded-2xl"
        onClick={() => sliderRight(elementRef.current)}
      />

      <div
        className="flex overflow-x-auto w-full px-16 py-4 scrollbar-hide scroll-smooth"
        ref={elementRef}
      >
        {movieList.map((item, index) => (
          <img
            key={index}
            src={IMAGE_BASE_URL + item.backdrop_path}
            className="w-[] md:h-[310px] object-fill object-left-top mr-5 rounded-md hover:border-[4px] border-gray-400 transition-all duration-100 ease-in"
            alt={item.title}
            // min-w-full
          />
        ))}
      </div>
    </div>
  );
}

export default Slider;
