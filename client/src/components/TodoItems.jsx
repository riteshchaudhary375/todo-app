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

  // Fetching initialTodos
  const fetchingInitialTodos = async () => {
    setFetching(true);

    const controller = new AbortController();
    const signal = controller.signal;

    try {
      const res = await fetch("/api/v1/getTodos", { signal });
      const data = await res.json();

      const todos = data.todos;

      // console.log(todos);

      addInitialTodos(todos);
      setFetching(false);

      // The useEffect Hook Cleanup
      // it will clean up any calls in backend like, timer, api calling,...
      // like clean up 'clock' while moving another component.
      return () => {
        controller.abort();
      };
    } catch (error) {
      console.log(error);
      setFetching(false);
    }
  };

  useEffect(() => {
    fetchingInitialTodos();
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
      {todoList.map((item) => (
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
