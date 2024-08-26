import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { TodoContext } from "../store/todo-items-store";

const TodoNav = () => {
  const { todoList } = useContext(TodoContext);
  // console.log(todoList);

  return (
    <>
      <div className="totalTodoAndcreateBtnDiv">
        <span className="bg-warning rounded p-2">
          Total Todo's: 4
        </span>

        <Link to="/create-todo">
          <button className="btn btn-primary">Create Todo</button>
        </Link>
      </div>
      <hr />
    </>
  );
};

export default TodoNav;
