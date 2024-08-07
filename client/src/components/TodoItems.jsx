import React, { useEffect, useState } from "react";
import TodoItem from "./TodoItem";
import styles from "./TodoItems.module.css";
import { TodoContext } from "../store/todo-items-store";
import { useContext } from "react";
import LoadingSpinner from "./LoadingSpinner";
import WelcomeMessage from "./WelcomeMessage";

const TodoItems = ({ setError }) => {
  const { todoList, addInitialTodos } = useContext(TodoContext);
  // console.log(todoList);

  const [fetching, setFetching] = useState(false);

  useEffect(() => {
    setFetching(true);

    var responseClone;
    fetch("/api/v1/getTodos")
      .then((res) => {
        responseClone = res.clone();
        return res.json();
      })
      .then(
        (data) => {
          addInitialTodos(data.todos);
          // addInitialTodos([]);
          setFetching(false);
        },
        function (rejectionReason) {
          console.log(
            "Error parsing JSON from response:",
            rejectionReason,
            responseClone
          );
          responseClone.text();
        }
      )
      .then(function (bodyText) {
        console.log("Received the following instead of valid JSON:", bodyText); // 6
      })
      .catch((err) => {
        console.log(err);
        // setError(err.message);
      });
  }, []);

  return (
    <div className={styles.itemsContainer}>
      <div className={`row marginRow ${styles.tableHead}`}>
        <div className="col-6">Todo name</div>
        <div className="col-4">Due date</div>
        <div className="col-2">Actions</div>
      </div>
      <hr className={styles.horizontalLine} />
      {fetching && <LoadingSpinner />}
      {!fetching && todoList.length === 0 && <WelcomeMessage />}
      {!fetching &&
        todoList.map((item) => (
          <TodoItem
            key={item._id}
            id={item._id}
            name={item.todoName}
            date={item.dueDate}
            setError={setError}
          />
        ))}
    </div>
  );
};

export default TodoItems;
