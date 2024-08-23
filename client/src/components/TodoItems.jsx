import React from "react";
import TodoItem from "./TodoItem";
import styles from "./TodoItems.module.css";
import { TodoContext } from "../store/todo-items-store";
import { useContext } from "react";
import LoadingSpinner from "./LoadingSpinner";
import WelcomeMessage from "./WelcomeMessage";

const TodoItems = ({ setError }) => {
  const { todoList, fetching } = useContext(TodoContext);
  // console.log(todoList);

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
