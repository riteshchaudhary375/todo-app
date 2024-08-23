import React, { useEffect, useState } from "react";
import TodoItem from "./TodoItem";
import styles from "./TodoItems.module.css";
import { TodoContext } from "../store/todo-items-store";
import { useContext } from "react";
import LoadingSpinner from "./LoadingSpinner";
import WelcomeMessage from "./WelcomeMessage";

const TodoItems = ({ setError }) => {
  const { todoList, addInitialTodos } = useContext(TodoContext);
  console.log(todoList);

  const [fetching, setFetching] = useState(false);

  // Fetching initialTodos
  useEffect(() => {
    setFetching(true);

    const controller = new AbortController();
    const signal = controller.signal;

    const fetchData = async () => {
      try {
        /* 
      const res = await fetch("/api/v1/getTodos", { signal });
      const data = await res.json();
      const todos = data.todos;
      addInitialTodos(todos); 
      setFetching(false);
      */

        await fetch("/api/v1/getTodos", { signal })
          .then((res) => res.json())
          .then((data) => {
            addInitialTodos(data.todos);
            // setTodoChecked(data.todos);
            setFetching(false);
          })
          .catch((err) => console.log(err.message));

        // The useEffect Hook Cleanup
        // it will clean up any calls in backend like, timer, api calling,...
        // like clean up 'clock' while moving another component.
        return () => {
          console.log("Abort Controller: Cleaning up useEffect");
          controller.abort();
        };
      } catch (error) {
        console.log(error);
        setFetching(false);
      }
    };

    fetchData();
  }, [todoList.length]);

  return (
    <div className={styles.itemsContainer}>
      <div className={`row marginRow ${styles.tableHead}`}>
        <div className="col-1"></div>
        <div className="col-6">Todo name</div>
        <div className="col-3">Due date</div>
        <div className="col-2">Actions</div>
      </div>

      <hr className={styles.horizontalLine} />

      {fetching && <LoadingSpinner />}
      {!fetching && todoList.length === 0 && <WelcomeMessage />}
      {!fetching &&
        todoList.map((item, index) => (
          <TodoItem
            key={index}
            id={item._id}
            name={item.todoName}
            date={item.dueDate}
            todoStatus={item.complete}
            setError={setError}
            items={item}
          />
        ))}
    </div>
  );
};

export default TodoItems;
