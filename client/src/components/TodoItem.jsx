import React from "react";
import { MdDelete } from "react-icons/md";
import { FaEdit } from "react-icons/fa";
import styles from "./TodoItem.module.css";

const TodoItem = ({ id, todoName, todoDate, onDeleteClick }) => {
  return (
    <div className="container">
      <div className="row marginRow">
        <div className="col-6">{todoName}</div>
        <div className="col-4">{todoDate}</div>
        <div className={`col-2  ${styles.itemButton}`}>
          <button
            type="button"
            className="btn btn-outline-secondary"
            onClick={() => onDeleteClick(id)}
            title="Edit Todo"
          >
            <FaEdit className={styles.iconSize} />
          </button>

          <button
            type="button"
            className="btn btn-outline-danger"
            onClick={() => onDeleteClick(id)}
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
