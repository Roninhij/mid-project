/* eslint-disable react/prop-types */
import { useState } from "react";
import { addMovie } from "../Services/GlobalApi";
import { useMovieContext } from "./MovieContext";

const AddButton = ({ onClose }) => {
  const [newMovie, setNewMovie] = useState({
    title: "",
    backdrop_path: "",
    releasedate: "",
    genres: "",
    runtime: "",
    overview: "",
    rating: "",
    director: "",
  });
  const { getMovies } = useMovieContext();

  const handleAddMovie = async (e) => {
    try {
      e.preventDefault();
      await addMovie(newMovie);
      setNewMovie({
        title: "",
        backdrop_path: "",
        releasedate: "",
        genres: "",
        runtime: "",
        overview: "",
        rating: "",
        director: "",
      });
      onClose(); // Close the modal after adding
      getMovies();
    } catch (error) {
      console.error("Error adding movie:", error);
      // Handle error state or display an error message
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    console.log(name, value);
    setNewMovie((prevMovie) => ({
      ...prevMovie,
      [name]: value,
    }));
  };

  return (
    <div className="max-w-lg mx-auto p-6 bg-slate-700 shadow-md rounded-lg mt-10">
      <h3 className="text-2xl font-semibold mb-4 text-center">Add New Movie</h3>
      <form onSubmit={handleAddMovie} className="space-y-4">
        <input
          required
          type="text"
          placeholder="Title"
          name="title"
          value={newMovie.title}
          onChange={handleChange}
          className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <input
          required
          type="text"
          placeholder="Director"
          name="director"
          value={newMovie.director}
          onChange={handleChange}
          className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <input
          required
          type="text"
          placeholder="Release Date"
          name="releasedate"
          value={newMovie.releasedate}
          onChange={handleChange}
          className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <input
          required
          type="text"
          placeholder="Genre"
          name="genres"
          value={newMovie.genres}
          onChange={handleChange}
          className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <input
          required
          type="number"
          placeholder="Rating"
          name="rating"
          value={newMovie.rating}
          onChange={handleChange}
          className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <input
          required
          type="text"
          placeholder="Runtime"
          name="runtime"
          value={newMovie.runtime}
          onChange={handleChange}
          className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <textarea
          required
          placeholder="Overview"
          name="overview"
          value={newMovie.overview}
          onChange={handleChange}
          className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        ></textarea>
        <input
          required
          type="text"
          placeholder="Backdrop Path"
          name="backdrop_path"
          value={newMovie.backdrop_path}
          onChange={handleChange}
          className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

        <div className="flex justify-between mt-4">
          <button
            type="submit"
            className="w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-md transition duration-300"
          >
            Add Movie
          </button>
          <button
            type="button"
            onClick={onClose}
            className="w-full bg-gray-500 hover:bg-gray-600 text-white font-semibold py-2 px-4 rounded-md transition duration-300"
          >
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddButton;
