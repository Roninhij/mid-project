import { useEffect, useRef, useState } from "react";
import { getTrendingVideos } from "../Services/GlobalApi";
import { HiChevronLeft, HiChevronRight } from "react-icons/hi";
import ProductionHouse from "../components/ProductionHouse";
import GenreMovieList from "../components/GenreMovieList";
import { useNavigate } from "react-router-dom";
import { useMovieContext } from "../components/MovieContext";
import AddButton from "../components/AddButton";

const IMAGE_BASE_URL = "http://image.tmdb.org/t/p/original";
const screenWidth = window.innerWidth;

function Home() {
  const { updateMovieDetails } = useMovieContext(); // Access updateMovieDetails from MovieContext
  const [movieList, setMovieList] = useState([]);
  const elementRef = useRef();
  const navigate = useNavigate();

  useEffect(() => {
    getTrendingMovies();
  }, []);

  const handleMovieClicked = (movie) => {
    updateMovieDetails(movie); // Update movie details in context
    navigate(`/movie/${movie.id}`); // Navigate to movie details page with correct id
    console.log(movie);
  };

  const getTrendingMovies = () => {
    getTrendingVideos().then((resp) => {
      // console.log(resp.data.results);
      setMovieList(resp.data.results);
    });
  };

  const sliderLeft = (element) => {
    element.scrollLeft -= screenWidth - 110;
  };

  const sliderRight = (element) => {
    element.scrollLeft += screenWidth - 110;
  };

  // Example onClose function
  const handleClose = () => {
    // Implement close logic here
    console.log("Close button clicked or error called.");
  };

  return (
    <div>
      <HiChevronLeft
        className="hidden md:block text-black text-[30px] absolute mx-8 mt-[150px] cursor-pointer left-0 bg-white rounded-2xl"
        onClick={() => sliderLeft(elementRef.current)}
      />
      <HiChevronRight
        // className="hidden md:block text-black text-[30px] absolute mx-8 mt-[150px] cursor-pointer right-1 bg-white rounded-2xl"
        onClick={() => sliderRight(elementRef.current)}
      />
      <div
        className="flex overflow-x-auto w-full px-16 py-4 scrollbar-hide scroll-smooth"
        ref={elementRef}
      >
        {movieList.map((item) => {
          return (
            <img
              key={item.id}
              src={IMAGE_BASE_URL + item.backdrop_path}
              className="w-[] md:h-[310px] object-fill object-left-top mr-5 rounded-md hover:border-[4px] border-gray-400 transition-all duration-100 ease-in cursor-pointer"
              alt={item.title}
              onClick={() => handleMovieClicked(item)} // Pass movie object to handler
            />
          );
        })}
      </div>
      <ProductionHouse />
      <GenreMovieList />
      <AddButton onClose={handleClose} />
      {/* Example of passing onClose to AddButton */}
    </div>
  );
}

export default Home;
