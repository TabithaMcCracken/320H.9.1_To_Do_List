import React from 'react';
import EditTodo from './EditToDoList'; // Import the EditTodo component

const TodoList = ({ todos, onToggle, onDelete, onEdit }) => {
  const handleEdit = (id, text) => {
    onEdit(id, text); // Pass both id and text to the parent component
  };

  return (
    <ul className="todo-list" style={{ listStyleType: 'none' }}>
      {todos.map(todo => (
        <li key={todo.id} className={`todo-item ${todo.completed ? 'completed' : ''}`}>
          <input
            type="checkbox"
            checked={todo.completed}
            onChange={() => onToggle(todo.id)}
          />
          <span>{todo.title}</span>
          <button onClick={() => handleEdit(todo.id, todo.title)}>Edit</button>
          <button onClick={() => onDelete(todo.id)}>Delete</button>
        </li>
      ))}
    </ul>
  );
};

export default TodoList;
