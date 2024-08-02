import React, { useEffect, useState } from "react";
import AppName from "./components/AppName";
import AddTodo from "./components/AddTodo";
import TodoItems from "./components/TodoItems";
import Container from "./components/Container";
import WelcomeMessage from "./components/WelcomeMessage";
import { TodoItemsContext } from "./store/todo-items-store";
import "./App.css";

const App = () => {
  const [todoItems, setTodoItems] = useState([]);

  useEffect(() => {
    fetch("/api/v1/getTodos")
      .then((res) => res.json())
      .then((data) => {
        setTodoItems(data.todos);
        // console.log(data);
      });
  }, [todoItems]);

  /*   const handleNewItem = (itemName, itemDueDate) => {
    const newTodoItems = [
      ...todoItems,
      { name: itemName, dueDate: itemDueDate },
    ];
    setTodoItems(newTodoItems);
  }; */

  const handleDeleteItem = (todoItemName) => {
    const newTodoItems = todoItems.filter((item) => item.name !== todoItemName);
    setTodoItems(newTodoItems);
  };

  return (
    <TodoItemsContext.Provider value={todoItems}>
      <Container>
        <center className="todoContainer">
          <AppName />
          <AddTodo />
          <WelcomeMessage />
          <TodoItems onDeleteClick={handleDeleteItem} />
        </center>
      </Container>
    </TodoItemsContext.Provider>
  );
};

export default App;
