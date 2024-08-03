import React from "react";
import { Link } from "react-router-dom";
import { MdDelete } from "react-icons/md";
import { FaEdit } from "react-icons/fa";
import styles from "./TodoItem.module.css";

const TodoItem = ({ todoItem, onDeleteClick }) => {
  // console.log(todoItem);

  return (
    <div className="container">
      <div className="row marginRow">
        <div className="col-6">{todoItem.todoName}</div>
        <div className="col-4">{todoItem.dueDate}</div>
        <div className={`col-2  ${styles.itemButton}`}>
          <Link to={`/edit-todo/${todoItem._id}`}>
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
            onClick={() => onDeleteClick(todoItem._id)}
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
