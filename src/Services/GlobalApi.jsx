import axios from "axios";
const baseUrl = "https://668690de83c983911b02c507.mockapi.io/mid-project";
const movieBaseUrl = "https://api.themoviedb.org/3";
const api_key = "2ec0d66f5bdf1dd12eefa0723f1479cf";

const movieByGenreBaseURL =
  "https://api.themoviedb.org/3/discover/movie?api_key=" + api_key;

const getTrendingVideos = () =>
  axios.get(movieBaseUrl + "/trending/all/day?api_key=" + api_key);

const getMovieByGenreId = (id) =>
  axios.get(movieByGenreBaseURL + "&with_genres=" + id);

const getMovieDetailsById = async (id) => {
  return axios.get(`${movieBaseUrl}/movie/${id}?api_key=${api_key}`);
};

const addMovie = async (newMovieData) => {
  try {
    const response = await axios.post(`${baseUrl}`, newMovieData);
    return response.data; // Optionally return data if needed
  } catch (error) {
    console.error("Failed to add movie:", error);
    throw new Error("Failed to add movie");
  }
};

// const getMovies = async () => {
//   try {
//     const response = await axios.get(`${baseUrl}`);
//     return response.data; // Optionally return data if needed
//   } catch (error) {
//     console.error("Failed to add movie:", error);
//     throw new Error("Failed to add movie");
//   }
// };

// console.log(getMovies());

// Function to edit an existing movie by ID
const editMovie = async (id, updatedMovieData) => {
  try {
    const response = await axios.put(`${baseUrl}/${id}`, updatedMovieData);
    return response.data; // Optionally return data if needed
  } catch (error) {
    console.error(`Failed to edit movie with ID ${id}:`, error);
    throw new Error("Failed to edit movie");
  }
};

// Function to delete a movie by ID
const deleteMovieById = async (id) => {
  try {
    const response = await axios.delete(`${baseUrl}/${id}`);
    return response.data; // Optionally return data if needed
  } catch (error) {
    console.error(`Failed to delete movie with ID ${id}:`, error);
    throw new Error("Failed to delete movie");
  }
};

export {
  getTrendingVideos,
  getMovieByGenreId,
  getMovieDetailsById,
  addMovie,
  editMovie,
  deleteMovieById,
  baseUrl,
};

// import axios from "axios";

// const movieBaseUrl="https://api.themoviedb.org/3"
// const api_key='2ec0d66f5bdf1dd12eefa0723f1479cf'

// const movieByGenreBaseURL='https://api.themoviedb.org/3/discover/movie?api_key=2ec0d66f5bdf1dd12eefa0723f1479cf';

// const getTrendingVideos=axios.get(movieBaseUrl+
//     "/trending/all/day?api_key="+api_key);
//     const getMovieByGenreId=(id)=>
//     axios.get(movieByGenreBaseURL+"&with_genres="+id)

// export default{
//     getTrendingVideos,
//     getMovieByGenreId
// }

// import axios from "axios";

// const movieBaseUrl="https://api.themoviedb.org/3"
// const api_key='2ec0d66f5bdf1dd12eefa0723f1479cf'

// const movieByGenreBaseURL='https://api.themoviedb.org/3/discover/movie?api_key=2ec0d66f5bdf1dd12eefa0723f1479cf';

// const getTrendingVideos=axios.get(movieBaseUrl+
//     "/trending/all/day?api_key="+api_key);
//     const getMovieByGenreId=(id)=>
//     axios.get(movieByGenreBaseURL+"&with_genres="+id)

// export default{
//     getTrendingVideos,
//     getMovieByGenreId
// }
