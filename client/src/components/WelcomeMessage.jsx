import React from "react";
import styles from "./WelcomeMessage.module.css";
// import { TodoContext } from "../store/todo-items-store";
// import { useContext } from "react";

const WelcomeMessage = () => {
  // const { todoList } = useContext(TodoContext);

  return (
    <center>
      <p className={styles.welcomeMessage}>No todo created...</p>
    </center>
  );

  /* return (
    todoList.length === 0 && (
      <p className={styles.welcomeMessage}>No todo created...</p>
    )
  ); */
};

export default WelcomeMessage;
