import axios from "axios";

const movieBaseUrl = "https://api.themoviedb.org/3";
const api_key = "2ec0d66f5bdf1dd12eefa0723f1479cf";

const movieByGenreBaseURL =
  "https://api.themoviedb.org/3/discover/movie?api_key=2ec0d66f5bdf1dd12eefa0723f1479cf";

// Function to fetch trending videos
const getTrendingVideos = () =>
  axios.get(movieBaseUrl + "/trending/all/day", {
    params: {
      api_key: api_key,
    },
  });

// Function to fetch movies by genre ID
const getMovieByGenreId = (id) =>
  axios.get(movieByGenreBaseURL + "&with_genres=" + id, {
    params: {
      api_key: api_key,
    },
  });

// Function to fetch movie details by movie ID
const getMovieDetailsById = (movieId) =>
  axios.get(`${movieBaseUrl}/movie/${movieId}`, {
    params: {
      api_key: api_key,
    },
  });

export { getTrendingVideos, getMovieByGenreId, getMovieDetailsById };
