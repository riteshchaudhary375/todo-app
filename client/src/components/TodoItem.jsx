import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { MdDelete } from "react-icons/md";
import { FaEdit } from "react-icons/fa";
import styles from "./TodoItem.module.css";
import { TodoContext } from "../store/todo-items-store";

const TodoItem = ({ id, name, date, items, todoStatus, setError }) => {
  const { deleteTodo, toggleTodo } = useContext(TodoContext);
  // console.log(todoItem);

  const [newStatus, setNewStatus] = useState("");
  // console.log(newStatus);
  const [todoChecked, setTodoChecked] = useState([]);
  // console.log(todoChecked);

  const handleDeleteButton = async (todoId) => {
    setError("");

    try {
      const res = await fetch(`/api/v1/deleteTodo/${todoId}`, {
        method: "DELETE",
      })
        // .then(() => deleteTodo())
        .catch((err) => {
          console.log(err);
          setError(err.message);
        });

      // console.log(res);

      deleteTodo(todoId);
    } catch (error) {
      console.log(error);
      setError(error.message);
    }
  };

  // State for toggle
  const handleToggleChange = (e) => {
    setNewStatus(e.target.checked);
    setTodoChecked(e.target.checked);
    // console.log(e.target.checked);
  };

  // Handle Toggle-box
  const handleToggleBox = async (todoId) => {
    setError("");
    try {
      const res = await fetch(`/api/v1/toggleTodo/${todoId}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          complete: newStatus,
        }),
      })
        .then((res) => res.json())
        .then((updatedTodoStatus) => {
          toggleTodo(updatedTodoStatus);
          // console.log(updatedTodoStatus);
          // location.reload()
        })
        .catch((err) => {
          console.log(err);
          setError(err.message);
        });
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <div className="container">
      <div className={`row marginRow ${styles.rowBox}`}>
        <div className={`col-1 ${styles.wrapperCheckbox}`}>
          <input
            className={styles.toggleCheckbox}
            type="checkbox"
            defaultChecked={todoStatus}
            onChange={handleToggleChange}
            onClick={() => handleToggleBox(id)}
            title="Done?"
          />
        </div>

        <div
          className={`col-6 ${
            items.complete === true || todoChecked === true
              ? "text-decoration-line-through"
              : ""
          }`}
        >
          {name}
        </div>
        <div className="col-3">{date}</div>
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
