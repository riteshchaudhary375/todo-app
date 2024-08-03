import React, { useEffect, useState } from "react";
import styles from "./EditTodo.module.css";
import { useParams, useNavigate } from "react-router-dom";

const EditTodo = () => {
  // Using useState hook
  const [todoName, setTodoName] = useState("");
  const [dueDate, setDueDate] = useState("");
  const navigate = useNavigate();
  const { todoId } = useParams();
  // console.log(todoId);

  const [todoData, setTodoData] = useState([]);
  // console.log(todoData);

  // fetching todo form api
  useEffect(() => {
    fetch(`/api/v1/getTodo/${todoId}`)
      .then((res) => res.json())
      .then((data) => {
        // console.log(data);
        setTodoData(data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const handleNameChange = (e) => {
    // console.log(e.target.value);
    setTodoName(e.target.value);
  };

  const handleDateChange = (e) => {
    setDueDate(e.target.value);
  };

  const onUpdateTodo = () => {
    // if form data is empty
    if (Object.keys(todoName).length === 0) {
      console.log("Todo-Name required");
      return;
    }

    if (Object.keys(dueDate).length === 0) {
      console.log("Due-Date required");
      return;
    }

    fetch(`/api/v1/updateTodo/${todoId}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        todoName,
        dueDate,
      }),
    })
      .then((res) => res.json())
      .then((todo) => {
        // console.log(todo);
        navigate("/");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleUpdateButtonClicked = () => {
    onUpdateTodo(todoName, dueDate);
    setTodoName("");
    setDueDate("");
  };

  return (
    <div className={`${styles.editContainer} text-center`}>
      <h1 className={styles.heading}>Update Todo</h1>

      <div className={`row ${styles.inputSection}`}>
        <div className="col-8">
          <input
            className={styles.editInput}
            type="text"
            placeholder="Enter todo..."
            defaultValue={todoData.todoName}
            onChange={handleNameChange}
          />
        </div>
        <div className="col-4">
          <input
            className={styles.editInput}
            type="date"
            defaultValue={todoData.dueDate}
            onChange={handleDateChange}
          />
        </div>
      </div>

      <div>
        <button
          type="button"
          className={`btn btn-success ${styles.button}`}
          onClick={handleUpdateButtonClicked}
        >
          Update
        </button>
      </div>
    </div>
  );
};

export default EditTodo;
