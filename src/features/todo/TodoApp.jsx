import React from "react";
import Header from "../../components/Header";
import AddTodo from "../../components/AddTodo";
import ViewTodoList from "../../components/VIewTodoList";
import { useSelector } from "react-redux";
import ErrorTodo from "../../components/ErrorTodo";

function TodoApp() {
  const todos = useSelector((store) => store.todos);
  return (
    <>
      <div className="container">
        <div className="row">
          <div
            className="card mt-5 p-4"
            style={{ width: "600px", margin: "0 auto" }}
          >
            <Header />
            <AddTodo />
            {todos.length > 0 ? <ViewTodoList /> : <ErrorTodo />}
          </div>
        </div>
      </div>
    </>
  );
}

export default TodoApp;
