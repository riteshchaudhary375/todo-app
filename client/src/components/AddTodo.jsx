import React, { useRef, useState } from "react";
import styles from "./AddTodo.module.css";
import { RiCalendarTodoFill } from "react-icons/ri";

const AddTodo = () => {
  // Using useState hook
  /* const [todoName, setTodoName] = useState("");
  const [dueDate, setDueDate] = useState("");

  const handleNameChange = (e) => {
    console.log(e.target.value);
    setTodoName(e.target.value);
  };

  const handleDateChange = (e) => {
    setDueDate(e.target.value);
  };

  const handleAddButtonClicked = () => {
    onNewItem(todoName, dueDate);
    setTodoName("");
    setDueDate("");
  }; */

  // Using useRefHook
  const todoNameElement = useRef();
  const todoDueDateElement = useRef();

  const handleAddButtonClicked = () => {
    const todoName = todoNameElement.current.value;
    const dueDate = todoDueDateElement.current.value;

    todoNameElement.current.value = "";
    todoDueDateElement.current.value = "";

    fetch("/api/v1/postTodo", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        todoName,
        dueDate,
      }),
    })
      .then((res) => res.json())
      // .then(console.log);
      .then((todo) => {
        // console.log(todo);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="container text-center">
      <div className="row marginRow">
        <div className="col-6">
          <input
            className={styles.addInput}
            type="text"
            placeholder="Enter todo..."
            /* value={todoName}
            onChange={handleNameChange} */
            ref={todoNameElement}
          />
        </div>
        <div className="col-4">
          <input
            className={styles.addInput}
            type="date"
            /* value={dueDate}
            onChange={handleDateChange} */
            ref={todoDueDateElement}
          />
        </div>
        <div className="col-2">
          <button
            type="button"
            className="btn btn-success buttonWidth"
            onClick={handleAddButtonClicked}
            title="Add Todo"
          >
            <RiCalendarTodoFill className="iconSize" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddTodo;
