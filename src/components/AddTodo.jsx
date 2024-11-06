import React, { useRef } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../features/todo/todoSlice";
import { MdOutlineAddCircleOutline } from "react-icons/md";

function AddTodo() {
  const dispatch = useDispatch();
  const dataInput = useRef();
  const handleSubmit = () => {
    dispatch(addTodo(dataInput.current.value));
    dataInput.current.value = "";
  };
  return (
    <>
      <div className="d-flex gap-2">
        <input type="text" ref={dataInput} className="form-control" placeholder="Write Task"/>
        <button onClick={handleSubmit} className="btn btn-primary">
          <MdOutlineAddCircleOutline />
        </button>
      </div>
    </>
  );
}

export default AddTodo;
