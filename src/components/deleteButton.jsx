// DeleteButton.js


import axios from "axios";
import { baseUrl } from "../Services/GlobalApi"; // Ensure to import baseUrl from GlobalApi

const DeleteButton = ({ movieId, onDelete }) => {
  const handleDelete = async () => {
    try {
      await axios.delete(`${baseUrl}/${movieId}`);
      onDelete(); // Call the callback function to update context or state after deletion
    } catch (error) {
      console.error("Failed to delete movie:", error);
    }
  };

  return (
    <button
      onClick={handleDelete}
      className="bg-red-600 hover:bg-red-700 text-white font-semibold py-2 sm:py-3 px-4 sm:px-6 rounded-full transition duration-300 text-sm sm:text-base"
    >
      Delete
    </button>
  );
};

export default DeleteButton;
