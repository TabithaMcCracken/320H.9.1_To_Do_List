import React, { useState } from 'react';

const AddTask = ({ onAddTask, todos }) => {
  const [newTaskTitle, setNewTaskTitle] = useState(""); // State for new task title
  const [newTaskCompleted, setNewTaskCompleted] = useState(false); // State for new task completion status

  const handleAddTask = () => {
    if (newTaskTitle.trim() !== "") {
      const nextId = todos.length > 0 ? Math.max(...todos.map(task => task.id)) + 1 : 1; // Calculate next sequential id
      const newTask = { id: nextId, title: newTaskTitle, completed: newTaskCompleted };
      onAddTask(newTask);
      setNewTaskTitle(""); // Clear new task title after adding
      setNewTaskCompleted(false); // Reset new task completion status
    }
  }

  return (
    <div>
      <input
        type="text"
        placeholder="Enter task title"
        value={newTaskTitle}
        onChange={(e) => setNewTaskTitle(e.target.value)}
      />
      <input
        type="checkbox"
        checked={newTaskCompleted}
        onChange={(e) => setNewTaskCompleted(e.target.checked)}
      />
      <button onClick={handleAddTask}>Add Task</button>
    </div>
  );
};

export default AddTask;
