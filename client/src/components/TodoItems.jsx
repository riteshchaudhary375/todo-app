import React, { useEffect, useState } from "react";
import TodoItem from "./TodoItem";
import styles from "./TodoItems.module.css";
import { TodoContext } from "../store/todo-items-store";
import { useContext } from "react";
import LoadingSpinner from "./LoadingSpinner";
import WelcomeMessage from "./WelcomeMessage";

const TodoItems = () => {
  const { todoList, addInitialTodos } = useContext(TodoContext);
  // console.log(todoList);

  const [fetching, setFetching] = useState(false);

  useEffect(() => {
    setFetching(true);

    fetch("/api/v1/getTodos")
      .then((res) => res.json())
      .then((data) => {
        addInitialTodos(data.todos);
        // addInitialTodos([]);
        setFetching(false);
      })
      .catch((err) => console.log(err));
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
          <TodoItem key={item.todoName} todoItem={item} />
        ))}
    </div>
  );
};

export default TodoItems;
