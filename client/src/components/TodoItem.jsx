import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { MdDelete } from "react-icons/md";
import { FaEdit } from "react-icons/fa";
import styles from "./TodoItem.module.css";
import { TodoContext } from "../store/todo-items-store";

const TodoItem = ({ id, name, date }) => {
  const { deleteTodo } = useContext(TodoContext);
  // console.log(todoItem);

  const handleDeleteButton = async (todoId) => {
    try {
      const res = await fetch(`/api/v1/deleteTodo/${todoId}`, {
        method: "DELETE",
      });
      // .then(() => deleteTodo())
      // .catch((err) => console.log(err));

      // console.log(res);

      deleteTodo(todoId);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="container">
      <div className="row marginRow">
        <div className="col-6">{name}</div>
        <div className="col-4">{date}</div>
        <div className={`col-2  ${styles.itemButton}`}>
          <Link to={`/edit-todo/${id}`}>
            <button
              type="button"
              className="btn btn-outline-secondary"
              title="Edit Todo"
            >
              <FaEdit className={styles.iconSize} />
            </button>
          </Link>

          <button
            type="button"
            className="btn btn-outline-danger"
            onClick={() => handleDeleteButton(id)}
            title="Delete Todo"
          >
            <MdDelete className={styles.iconSize} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default TodoItem;
