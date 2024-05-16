import React from 'react';

const EditTodo = ({ todo, onSave, editedText, setEditedText }) => {

  const handleSave = () => {
    onSave(todo.id, editedText);
  };

  return (
    <>
      {/* Edit field */}
      <input
        type="text"
        value={editedText}
        onChange={(e) => setEditedText(e.target.value)} // Update editedText state
        autoFocus
      />
      {/* Save button */}
      <button onClick={handleSave}>Save</button>
    </>
  );
};

export default EditTodo;
