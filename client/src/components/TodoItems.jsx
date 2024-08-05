import React, { useEffect } from "react";
import TodoItem from "./TodoItem";
import styles from "./TodoItems.module.css";
import { TodoContext } from "../store/todo-items-store";
import { useContext } from "react";

const TodoItems = () => {
  const { todoList, addInitialTodos } = useContext(TodoContext);
  // console.log(todoList);

  useEffect(() => {
    fetch("/api/v1/getTodos")
      .then((res) => res.json())
      .then((data) => {
        addInitialTodos(data.todos);
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
      {todoList.map((item) => (
        <TodoItem key={item.todoName} todoItem={item} />
      ))}
    </div>
  );
};

export default TodoItems;
