import React, { useContext, useRef } from "react";
import styles from "./CreateTodo.module.css";
import { Link, useNavigate } from "react-router-dom";
import Container from "./Container";
import { TodoContext } from "../store/todo-items-store";

const CreateTodo = () => {
  const { addTodo, error, setError } = useContext(TodoContext);
  const navigate = useNavigate();

  // Using useRefHook
  const todoNameElement = useRef();
  const dueDateElement = useRef();

  const handleAddButtonSubmit = (e) => {
    e.preventDefault();
    const name = todoNameElement.current.value;
    const date = dueDateElement.current.value;

    todoNameElement.current.value = "";
    dueDateElement.current.value = "";

    setError("");

    /* 
      // Method-1

      fetch("/api/v1/postTodo", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          todoName: name,
          dueDate: date,
        }),
      })
        .then((res) => res.json())
        .then(console.log)
        .catch((err) => {
          console.log(err);
        });

      addTodo(name, date); 
    */

    // Method-2
    fetch("/api/v1/postTodo", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        todoName: name,
        dueDate: date,
      }),
    })
      .then((res) => res.json())
      .then((todo) => {
        addTodo(todo);
        navigate("/");
      })
      .catch((err) => {
        // console.log(err);
        setError(err.message);
      });
  };

  return (
    <>
      <Container>
        <form className="text-center" onSubmit={handleAddButtonSubmit}>
          <h1 className={styles.heading}>Add Todo</h1>

          <div className={`row ${styles.inputSection}`}>
            <div className="col-8">
              <input
                className={styles.addInput}
                type="text"
                placeholder="Enter todo..."
                ref={todoNameElement}
                required
              />
            </div>
            <div className="col-4">
              <input
                className={styles.addInput}
                type="date"
                ref={dueDateElement}
              />
            </div>
          </div>

          <div className={styles.buttonDiv}>
            <Link to="/">Back</Link>

            <button
              type="submit"
              className={`btn btn-primary ${styles.button}`}
              title="Add Todo"
            >
              Create
            </button>
          </div>
        </form>
      </Container>

      <div className="errorDiv">
        {error && <p className="errorText">{error}</p>}
      </div>
    </>
  );
};

export default CreateTodo;
