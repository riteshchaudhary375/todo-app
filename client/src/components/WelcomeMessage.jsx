import React from "react";
import styles from "./WelcomeMessage.module.css";
import { TodoItemsContext } from "../store/todo-items-store";
import { useContext } from "react";

const WelcomeMessage = () => {
  const todoItems = useContext(TodoItemsContext);

  return (
    todoItems.length === 0 && (
      <p className={styles.welcomeMessage}>Hello, let's create a new todo...</p>
    )
  );
};

export default WelcomeMessage;
