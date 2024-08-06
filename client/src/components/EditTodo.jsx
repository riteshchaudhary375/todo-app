import React, { useContext, useEffect, useState } from "react";
import styles from "./EditTodo.module.css";
import { useParams, useNavigate, Link } from "react-router-dom";
import Container from "./Container";
import { TodoContext } from "../store/todo-items-store";

const EditTodo = () => {
  const { updateTodo, error, setError } = useContext(TodoContext);

  // Using useState hook
  const [itemName, setItemName] = useState("");
  const [itemDate, setItemDate] = useState("");
  const navigate = useNavigate();
  const { todoId } = useParams();
  // console.log(todoId);

  const [fetchedValue, setFetchedValue] = useState("");
  // console.log(fetchedValue);

  // fetching todo form api
  useEffect(() => {
    try {
      const fetchTodo = async () => {
        await fetch(`/api/v1/getTodo/${todoId}`)
          .then((res) => res.json())
          .then((data) => {
            // console.log(data);
            setFetchedValue(data);
          })
          .catch((err) => {
            // console.log(err);
            setError(err.message);
          });
      };
      fetchTodo();
    } catch (error) {
      // console.log(error.message);
      setError(error.message);
    }
  }, [todoId]);

  // for update todo
  const handleNameChange = (e) => {
    // console.log(e.target.value);
    // setItemName({ ...fetchedValue, todoName: e.target.value });
    setItemName(e.target.value);
  };
  const handleDateChange = (e) => {
    // setItemDate({ ...fetchedValue, dueDate: e.target.value });
    setItemDate(e.target.value);
  };

  // Update API
  const handleUpdateButtonSubmit = async (e) => {
    e.preventDefault();

    // if form data is empty
    if (Object.keys(itemName).length === 0) {
      // console.log("No change made on todo name");
      setError("No change made on todo name");
      return;
    }
    setError("");

    await fetch(`/api/v1/updateTodo/${todoId}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        todoName: itemName,
        dueDate: itemDate,
      }),
    })
      .then((res) => res.json())
      .then((updatedTodoItem) => {
        // console.log(todo);
        updateTodo(updatedTodoItem);
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
        <form className="text-center" onSubmit={handleUpdateButtonSubmit}>
          <h1 className={styles.heading}>Update Todo</h1>

          <div className={`row ${styles.inputSection}`}>
            <div className="col-8">
              <input
                className={styles.editInput}
                type="text"
                placeholder="Enter todo..."
                defaultValue={fetchedValue.todoName}
                onChange={handleNameChange}
                required
              />
            </div>
            <div className="col-4">
              <input
                className={styles.editInput}
                type="date"
                defaultValue={fetchedValue.dueDate}
                onChange={handleDateChange}
              />
            </div>
          </div>

          <div className={styles.buttonDiv}>
            <Link to="/">Back</Link>

            <button
              type="submit"
              className={`btn btn-success ${styles.button}`}
              title="Update Todo"
            >
              Update
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

export default EditTodo;
