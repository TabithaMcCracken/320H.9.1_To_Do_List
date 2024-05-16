import React from "react";
import { useState, useReducer } from "react";
import initialState from "./ToDoData";
import "./App.css";
import ToDoList from "../components/ToDoList";
import EditToDo from "../components/EditToDoList";

function reducer(state, action) {
  switch (action.type) {
    case 'TOGGLE_TODO':
      return {
        ...state,
        todos: state.todos.map(todo =>
          todo.id === action.payload ? { ...todo, completed: !todo.completed } : todo
        )
      };
    case 'DELETE_TODO':
      return {
        ...state,
        todos: state.todos.filter(todo => todo.id !== action.payload)
      }
    case 'EDIT_TODO':
      return {
        ...state,
        todos: state.todos.map(todo =>
          todo.id === action.payload.id ? { ...todo, title: action.payload.title } : todo
        )
      }
    default:
      return state;
  }
}

function App() {
  const [state, dispatch] = useReducer(reducer, { todos: initialState});
  const [editId, setEditId] = useState(null);
  const [editedText, setEditedText] = useState(""); // State for editedText

  const handleToggle = (id) => {
    dispatch({ type: 'TOGGLE_TODO', payload: id})
  }

  const handleDelete = (id) => {
    dispatch({ type: 'DELETE_TODO', payload: id })
  }

  const handleEdit = (id, text) => {
    dispatch({ type: 'EDIT_TODO', payload: { id, title: text } });
    setEditId(null); // Reset editId after edit
  }

  return (
    <div>
      <h1>To-Do List</h1>
      <ToDoList
        todos={state.todos}
        onToggle={handleToggle}
        onDelete={handleDelete}
        onEdit={(id, text) => { setEditId(id); setEditedText(text); }} // Pass function to update editedText
      />
      {editId !== null && (
        <EditToDo
          todo={state.todos.find(todo => todo.id === editId)}
          onSave={(id, text) => handleEdit(id, text)} // Pass onSave function to handle edit
          editedText={editedText} // Pass editedText as prop
          setEditedText={setEditedText} // Pass function to update editedText
        />
      )}
    </div>
  );
}


export default App;
