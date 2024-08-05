import React from "react";
import TodoItem from "./TodoItem";
import styles from "./TodoItems.module.css";
import { TodoContext } from "../store/todo-items-store";
import { useContext } from "react";

const TodoItems = () => {
  const { todoList } = useContext(TodoContext);
  // console.log(todoList);

  return (
    <div className={styles.itemsContainer}>
      <div className={`row marginRow ${styles.tableHead}`}>
        <div className="col-6">Todo name</div>
        <div className="col-4">Due date</div>
        <div className="col-2">Actions</div>
      </div>
      <hr className={styles.horizontalLine} />
      {todoList.map((item) => (
        <TodoItem key={item.todoName} todoItem={item} />
      ))}
    </div>
  );
};

export default TodoItems;
