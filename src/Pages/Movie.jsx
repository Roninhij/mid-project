/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useMovieContext } from "../components/MovieContext";
import { getMovieDetailsById } from "../Services/GlobalApi";
import DeleteButton from "../components/DeleteButton";
import EditButton from "../components/EditButton";

const IMAGE_BASE_URL = "http://image.tmdb.org/t/p/original";

const Movie = () => {
  const [poster, setPoster] = useState("");
  const { movieId } = useParams();
  const { movieDetails, updateMovieDetails } = useMovieContext();

  useEffect(() => {
    if (movieDetails) {
      const moviePoster = movieDetails?.backdrop_path.includes("http")
        ? movieDetails?.backdrop_path
        : IMAGE_BASE_URL + movieDetails?.backdrop_path;
      setPoster(moviePoster);
    }
  }, [movieDetails]);

  useEffect(() => {
    // fetchMovieDetails();

    const link = document.createElement("link");
    link.href =
      "https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap";
    link.rel = "stylesheet";
    document.head.appendChild(link);

    return () => {
      document.head.removeChild(link);
    };
  }, [movieId]);

  useEffect(() => {
    fetchMovieDetails(movieId);
  }, [movieId]);
  const fetchMovieDetails = async (id) => {
    try {
      const response = await getMovieDetailsById(id);
      updateMovieDetails(response.data);
    } catch (error) {
      console.error("Error fetching movie details:", error);
    }
  };

  // const fetchMovieDetails = async () => {
  //   try {
  //     const response = await getMovieDetailsById(movieId);
  //     updateMovieDetails(response.data);
  //   } catch (error) {
  //     console.error("Error fetching movie details:", error);
  //   }
  // };
  console.log(movieDetails?.genre_ids);

  // movieDetails.genre_id?.map((genre) => {
  //   console.log(`ssssssssssssssssssssssss`, genre);
  //   return genre === 28 ? "ACTION" : "NO";
  // });

  if (!movieDetails) return <div>Loading...</div>;
  console.log(movieDetails);
  return (
    <div className="relative min-h-screen overflow-hidden font-['Inter',sans-serif]">
      {/* Blurred background image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url(${poster})`,
          filter: "blur(20px)",
          transform: "scale(1.1)",
        }}
      ></div>

      {/* Overlay to darken the background */}
      <div className="absolute inset-0 bg-black opacity-50"></div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 py-8 sm:py-12 text-white">
        <div className="flex flex-col lg:flex-row items-start">
          <div className="lg:w-2/3 lg:pr-8">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-2 sm:mb-4 leading-tight">
              {movieDetails.name ?? movieDetails.title}
            </h1>
            <div className="text-xs sm:text-sm text-gray-300 mb-4 sm:mb-6 font-medium font-semibold gap-5 flex ">
              {/* {movieDetails.release_date?.split("-")[0]} */}

              <p>{movieDetails.release_date ?? movieDetails.first_air_date}</p>

              {movieDetails.runtime}
              <p className="flex gap-5">
                {movieDetails.genre_ids?.map((genre) =>
                  genre === 28
                    ? "ACTION"
                    : genre === 12
                    ? "ADVENTURE"
                    : genre === 16
                    ? "ANIMATION"
                    : genre === 35
                    ? "COMEDY"
                    : genre === 80
                    ? "CRIME"
                    : ""
                )}
              </p>
            </div>
            <p className="text-base sm:text-lg mb-6 sm:mb-8 leading-relaxed text-gray-200">
              {movieDetails.overview}
            </p>
            <div className="flex items-center space-x-4 mb-6 sm:mb-8">
              <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 sm:py-3 px-6 sm:px-8 rounded-full transition duration-300 text-sm sm:text-base">
                Subscribe to Watch
              </button>
              <button className="bg-gray-800 hover:bg-gray-700 text-white font-bold py-2 sm:py-3 px-3 sm:px-4 rounded-full transition duration-300 text-sm sm:text-base">
                +
              </button>
            </div>
            <div className="text-xs sm:text-sm font-medium">
              {/* <span className="text-gray-400">Starring: </span> */}
              <span className="text-gray-200">
                {movieDetails.credits?.cast
                  ?.slice(0, 3)
                  .map((actor) => actor.name)
                  .join(", ")}
              </span>
            </div>
          </div>
          <div className="flex gap-4 mt-4">
            <EditButton movie={movieDetails} />
            <DeleteButton movieId={movieDetails.id} onDelete={() => {}} />
          </div>
          <div className="lg:w-1/3 mt-6 lg:mt-0">
            <img
              src={poster}
              alt={movieDetails.title}
              className="w-full max-w-sm mx-auto lg:max-w-full rounded-lg shadow-lg h-[600px]"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Movie;
