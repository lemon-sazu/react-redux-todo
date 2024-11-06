import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteTodo, toggleTodo } from "../features/todo/todoSlice";
import TodoItem from "./TodoItem";

function ViewTodoList() {
  const dispatch = useDispatch();
  const todos = useSelector((state) => state.todos);
  const handleCompleted = (id) => {
    dispatch(toggleTodo(id));
  };
  const handleDelete = (id) => {
    dispatch(deleteTodo(id));
  };
  return (
    <>
      <ul className="list-group mt-4">
        {todos.map((todo) => (
          <TodoItem
            key={todo.id}
            todo={todo}
            onToggle={handleCompleted}
            onDelete={handleDelete}
          />
        ))}
      </ul>
    </>
  );
}

export default ViewTodoList;
