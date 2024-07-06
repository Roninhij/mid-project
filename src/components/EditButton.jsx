/* eslint-disable react/prop-types */
// EditButton.js

import { useState } from "react";
import AddButton from "./AddButton"; // Ensure to import AddButton correctly
import { editMovie } from "../Services/GlobalApi"; // Import editMovie function

const EditButton = ({ movie }) => {
  const [isEditing, setIsEditing] = useState(false);

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleClose = () => {
    setIsEditing(false);
  };

  const handleEditMovie = async (updatedMovieData) => {
    try {
      await editMovie(movie.id, updatedMovieData);
      handleClose(); // Close the edit form after editing
      // Optionally update local state or context with edited data
    } catch (error) {
      console.error("Failed to edit movie:", error);
      // Handle error state or display an error message
    }
  };

  return (
    <>
      <button
        onClick={handleEdit}
        className="bg-yellow-600 hover:bg-yellow-700 text-white font-semibold py-2 sm:py-3 px-4 sm:px-6 rounded-full transition duration-300 text-sm sm:text-base"
      >
        Edit
      </button>
      {isEditing && (
        <AddButton
          onClose={handleClose}
          movieToEdit={movie}
          onEdit={handleEditMovie}
        />
      )}
    </>
  );
};

export default EditButton;
