// src/components/TodoItem.js
import React from "react";
import { RiDeleteBin5Fill } from "react-icons/ri";
import { IoMdUndo } from "react-icons/io";
import { FaCheckDouble } from "react-icons/fa6";

function TodoItem({ todo, onToggle, onDelete }) {
  return (
    <li
      className="list-group-item d-flex gap-2 justify-content-between"
      style={{
        textDecoration: todo.completed ? "line-through" : "none",
      }}
    >
      <p className="m-0">{todo.text}</p>
      <div className="d-flex gap-2">
        <button
          onClick={() => onToggle(todo.id)}
          className="btn btn-info btn-sm"
        >
          {todo.completed ? <IoMdUndo /> : <FaCheckDouble />}
        </button>
        <button
          onClick={() => onDelete(todo.id)}
          className="btn btn-danger btn-sm"
        >
          <RiDeleteBin5Fill />
        </button>
      </div>
    </li>
  );
}

export default TodoItem;
