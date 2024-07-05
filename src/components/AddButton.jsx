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
    <div className="add-movie-form">
      <h3>Add New Movie</h3>
      <form onSubmit={handleAddMovie}>
        <input
          required
          type="text"
          placeholder="Title"
          name="title"
          value={newMovie.title}
          onChange={handleChange}
        />
        <input
          required
          type="text"
          placeholder="Director"
          name="director"
          value={newMovie.director}
          onChange={handleChange}
        />
        <input
          required
          type="number"
          placeholder="Release-Date"
          name="releasedate"
          value={newMovie.releasedate}
          onChange={handleChange}
        />
        <input
          required
          type="text"
          placeholder="Genre"
          name="genres"
          value={newMovie.genres}
          onChange={handleChange}
        />
        <input
          required
          type="number"
          placeholder="Rating"
          name="rating"
          value={newMovie.rating}
          onChange={handleChange}
        />
        <input
          required
          type="text"
          name="runtime"
          placeholder="Runtime"
          value={newMovie.runtime}
          onChange={handleChange}
        />
        <input
          required
          type="text"
          name="overview"
          placeholder="Overview"
          value={newMovie.overview}
          onChange={handleChange}
        />
        <input
          required
          type="text"
          name="backdrop_path"
          placeholder="Poster"
          value={newMovie.backdrop_path}
          onChange={handleChange}
        />

        <div className="add-btns">
          <button type="submit">Add Movie</button>
        </div>
      </form>
    </div>
  );
};

export default AddButton;
