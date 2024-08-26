import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { TodoContext } from "../store/todo-items-store";

const TodoNav = () => {
  const taskDetail = useContext(TodoContext);
  // console.log(taskDetail);

  return (
    <>
      <div className="totalTodoAndcreateBtnDiv">
        <span className="bg-warning rounded p-2">
          Total Todo's: <b>{taskDetail.todoList.totalTodos}</b>
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
