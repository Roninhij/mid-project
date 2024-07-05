import  { useState } from "react";

const EditButton = ({ label, value,  buttonLabel }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [inputValue, setInputValue] = useState(value);

  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleSaveClick = () => {
   
    setIsEditing(false);
  };

  return (
    <div className="editable-field">
      {isEditing ? (
        <>
          <input
            type={label === "Year" || label === "Rating" ? "number" : "text"}
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            className="border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:border-blue-500"
          />
          <button
            onClick={handleSaveClick}
            className="save-edit-btn ml-2 px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
          >
            Save
          </button>
        </>
      ) : (
        <>
          <h4 className="mb-2">
            {label}: {value}
          </h4>
          <button
            onClick={handleEditClick}
            className="edit-btn px-4 py-2 bg-gray-300 text-gray-700 rounded-md hover:bg-gray-400 focus:outline-none focus:bg-gray-400"
          >
            {buttonLabel}
          </button>
        </>
      )}
    </div>
  );
};

export default EditButton;
