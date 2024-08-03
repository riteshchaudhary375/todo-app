import React from "react";
import TodoItem from "./TodoItem";
import styles from "./TodoItems.module.css";
import { TodoItemsContext } from "../store/todo-items-store";
import { useContext } from "react";

const TodoItems = ({ onDeleteClick }) => {
  const todoItems = useContext(TodoItemsContext);
  // console.log(todoItems);

  return (
    <div className={styles.itemsContainer}>
      {todoItems.map((item) => (
        <TodoItem
          key={item._id}
          todoItem={item}
          onDeleteClick={onDeleteClick}
        />
      ))}
    </div>
  );
};

export default TodoItems;
